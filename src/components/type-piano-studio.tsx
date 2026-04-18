"use client";

import { Midi } from "@tonejs/midi";
import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { Shell } from "@/components/shell";

const DEFAULT_TEXT =
  "Play this sentence like I typed it.\nThen switch modes and feed the app a MIDI file.";

const PIANO_START = 36;
const PIANO_END = 96;

const BLACK_PITCH_CLASSES = new Set([1, 3, 6, 8, 10]);
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const COMPUTER_KEYBOARD_ROWS = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
  ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
  ["SPACE"],
] as const;

const SHIFTED_KEY_MAP: Record<string, string> = {
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
};

type ParsedMidiNote = {
  duration: number;
  id: string;
  label: string;
  midi: number;
  time: number;
  velocity: number;
};

type ParsedMidiFile = {
  bpm: number | null;
  duration: number;
  highest: number;
  lowest: number;
  name: string;
  noteCount: number;
  notes: ParsedMidiNote[];
  trackCount: number;
};

type VoiceRecord = {
  nodes: AudioNode[];
  oscillators: OscillatorNode[];
  startTime: number;
};

type PianoKeyModel = {
  black?: {
    label: string;
    midi: number;
  };
  label: string;
  midi: number;
};

const PIANO_WHITE_KEYS: PianoKeyModel[] = [];

for (let midi = PIANO_START; midi <= PIANO_END; midi += 1) {
  if (BLACK_PITCH_CLASSES.has(midi % 12)) {
    continue;
  }

  const blackMidi = midi + 1;
  PIANO_WHITE_KEYS.push({
    black:
      blackMidi <= PIANO_END && BLACK_PITCH_CLASSES.has(blackMidi % 12)
        ? { label: formatNoteLabel(blackMidi), midi: blackMidi }
        : undefined,
    label: formatNoteLabel(midi),
    midi,
  });
}

function formatNoteLabel(midi: number) {
  return `${NOTE_NAMES[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

function midiToFrequency(midi: number) {
  return 440 * 2 ** ((midi - 69) / 12);
}

function formatSeconds(value: number) {
  const totalSeconds = Math.max(0, Math.round(value));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function keyboardLabelFromCharacter(character: string) {
  if (character === " ") {
    return "SPACE";
  }

  if (character === "\n") {
    return "ENTER";
  }

  const upper = character.toUpperCase();

  if (/^[A-Z0-9]$/.test(upper)) {
    return upper;
  }

  return SHIFTED_KEY_MAP[character] ?? (["-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"].includes(character) ? character : null);
}

function createSetFromNotes(notes: Map<number, number>) {
  return Array.from(notes.keys()).sort((left, right) => left - right);
}

function rangeLabel(lowest: number, highest: number) {
  return `${formatNoteLabel(lowest)} to ${formatNoteLabel(highest)}`;
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/25 px-4 py-3">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan/70">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

export function TypePianoStudio() {
  const [textInput, setTextInput] = useState(DEFAULT_TEXT);
  const [typedOutput, setTypedOutput] = useState("");
  const [charactersPerSecond, setCharactersPerSecond] = useState(8);
  const [typingIsPlaying, setTypingIsPlaying] = useState(false);
  const [activeComputerKey, setActiveComputerKey] = useState<string | null>(null);
  const [typingStatus, setTypingStatus] = useState(
    "Press play to stream your text into the output panel.",
  );

  const [midiFile, setMidiFile] = useState<ParsedMidiFile | null>(null);
  const [midiIsPlaying, setMidiIsPlaying] = useState(false);
  const [midiProgress, setMidiProgress] = useState(0);
  const [midiStatus, setMidiStatus] = useState(
    "Upload a .mid or .midi file to hear it on the virtual piano.",
  );
  const [midiError, setMidiError] = useState<string | null>(null);
  const [midiLoading, setMidiLoading] = useState(false);
  const [activePianoNotes, setActivePianoNotes] = useState<number[]>([]);

  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeVoicesRef = useRef<Map<string, VoiceRecord>>(new Map());
  const activePianoCountsRef = useRef<Map<number, number>>(new Map());
  const typingTimerIdsRef = useRef<number[]>([]);
  const midiTimerIdsRef = useRef<number[]>([]);
  const midiProgressTimerRef = useRef<number | null>(null);
  const midiStartPerfRef = useRef<number | null>(null);

  useEffect(() => {
    const typingTimers = typingTimerIdsRef;
    const midiTimers = midiTimerIdsRef;
    const midiProgressTimer = midiProgressTimerRef;
    const activeVoices = activeVoicesRef;
    const audioContext = audioContextRef;

    return () => {
      clearTimeouts(typingTimers.current);
      clearTimeouts(midiTimers.current);

      if (midiProgressTimer.current !== null) {
        window.clearInterval(midiProgressTimer.current);
      }

      stopActiveVoices(activeVoices.current, audioContext.current);

      if (audioContext.current && audioContext.current.state !== "closed") {
        void audioContext.current.close();
      }
    };
  }, []);

  async function ensureAudioReady() {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
      masterGainRef.current = audioContextRef.current.createGain();
      masterGainRef.current.gain.value = 0.72;
      masterGainRef.current.connect(audioContextRef.current.destination);
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }

  function updatePianoActivity(midi: number, shouldActivate: boolean) {
    const activeCounts = activePianoCountsRef.current;
    const currentCount = activeCounts.get(midi) ?? 0;

    if (shouldActivate) {
      activeCounts.set(midi, currentCount + 1);
    } else if (currentCount <= 1) {
      activeCounts.delete(midi);
    } else {
      activeCounts.set(midi, currentCount - 1);
    }

    setActivePianoNotes(createSetFromNotes(activeCounts));
  }

  function stopTypingPlayback(message?: string) {
    clearTimeouts(typingTimerIdsRef.current);
    setTypingIsPlaying(false);
    setActiveComputerKey(null);

    if (message) {
      setTypingStatus(message);
    }
  }

  function stopMidiPlayback(options?: { message?: string; resetProgress?: boolean }) {
    clearTimeouts(midiTimerIdsRef.current);

    if (midiProgressTimerRef.current !== null) {
      window.clearInterval(midiProgressTimerRef.current);
      midiProgressTimerRef.current = null;
    }

    stopActiveVoices(activeVoicesRef.current, audioContextRef.current);
    activePianoCountsRef.current.clear();
    midiStartPerfRef.current = null;
    setMidiIsPlaying(false);
    setActivePianoNotes([]);

    if (options?.resetProgress) {
      setMidiProgress(0);
    }

    if (options?.message) {
      setMidiStatus(options.message);
    }
  }

  function playTypingClick(seedCharacter: string) {
    const context = audioContextRef.current;
    const master = masterGainRef.current;

    if (!context || !master) {
      return;
    }

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const frequencyBump = (seedCharacter.charCodeAt(0) % 80) + 780;

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(frequencyBump, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 0.05);
  }

  async function handlePlayText() {
    if (!textInput.trim()) {
      setTypingStatus("Add some text first, then press play.");
      return;
    }

    stopTypingPlayback();
    stopMidiPlayback();

    try {
      await ensureAudioReady();
    } catch {
      setTypingStatus("This browser could not start Web Audio.");
      return;
    }

    const characters = Array.from(textInput);
    const delay = Math.max(45, 1000 / charactersPerSecond);
    let index = 0;

    setTypedOutput("");
    setTypingIsPlaying(true);
    setTypingStatus(`Typing ${characters.length} characters at ${charactersPerSecond} chars/sec.`);

    const typeNextCharacter = () => {
      if (index >= characters.length) {
        stopTypingPlayback(`Finished typing ${characters.length} characters.`);
        return;
      }

      const currentCharacter = characters[index];
      const keyboardLabel = keyboardLabelFromCharacter(currentCharacter);

      setTypedOutput((existing) => existing + currentCharacter);
      setActiveComputerKey(keyboardLabel);
      playTypingClick(currentCharacter);

      const clearHighlightTimer = window.setTimeout(() => {
        setActiveComputerKey((existing) => (existing === keyboardLabel ? null : existing));
      }, Math.min(180, delay * 0.65));

      const nextCharacterTimer = window.setTimeout(() => {
        index += 1;
        typeNextCharacter();
      }, delay);

      typingTimerIdsRef.current.push(clearHighlightTimer, nextCharacterTimer);
    };

    typeNextCharacter();
  }

  function handleResetOutput() {
    stopTypingPlayback("Output cleared. Your source text is still in place.");
    setTypedOutput("");
  }

  async function schedulePianoVoice(note: ParsedMidiNote, baseTime: number) {
    const context = audioContextRef.current;
    const master = masterGainRef.current;

    if (!context || !master) {
      return;
    }

    const startTime = baseTime + note.time;
    const releaseTime = startTime + note.duration + 0.18;
    const frequency = midiToFrequency(note.midi);
    const envelope = context.createGain();
    const filter = context.createBiquadFilter();
    const body = context.createOscillator();
    const shimmer = context.createOscillator();
    const bodyGain = context.createGain();
    const shimmerGain = context.createGain();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.max(1600, frequency * 7), startTime);
    filter.Q.setValueAtTime(0.7, startTime);

    body.type = "triangle";
    body.frequency.setValueAtTime(frequency, startTime);
    shimmer.type = "sine";
    shimmer.frequency.setValueAtTime(frequency * 2, startTime);
    shimmer.detune.setValueAtTime(6, startTime);

    bodyGain.gain.value = 0.82;
    shimmerGain.gain.value = 0.18;

    const peak = 0.1 + note.velocity * 0.14;
    envelope.gain.setValueAtTime(0.0001, startTime);
    envelope.gain.linearRampToValueAtTime(peak, startTime + 0.02);
    envelope.gain.exponentialRampToValueAtTime(Math.max(peak * 0.45, 0.025), startTime + Math.max(note.duration * 0.45, 0.1));
    envelope.gain.exponentialRampToValueAtTime(0.0001, releaseTime);

    body.connect(bodyGain);
    shimmer.connect(shimmerGain);
    bodyGain.connect(filter);
    shimmerGain.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);

    const cleanup = () => {
      activeVoicesRef.current.delete(note.id);
      [body, shimmer, bodyGain, shimmerGain, filter, envelope].forEach((node) => {
        try {
          node.disconnect();
        } catch {}
      });
    };

    body.onended = cleanup;

    body.start(startTime);
    shimmer.start(startTime);
    body.stop(releaseTime);
    shimmer.stop(releaseTime);

    activeVoicesRef.current.set(note.id, {
      nodes: [body, shimmer, bodyGain, shimmerGain, filter, envelope],
      oscillators: [body, shimmer],
      startTime,
    });
  }

  async function handlePlayMidi() {
    if (!midiFile || midiFile.notes.length === 0) {
      setMidiStatus("Upload a MIDI file before pressing play.");
      return;
    }

    stopTypingPlayback("Typing stopped so the piano can take over.");
    stopMidiPlayback({ resetProgress: true });

    try {
      const context = await ensureAudioReady();
      const baseTime = context.currentTime + 0.08;

      setMidiIsPlaying(true);
      setMidiProgress(0);
      setMidiStatus(`Playing ${midiFile.name}.`);
      midiStartPerfRef.current = performance.now() + 80;

      for (const note of midiFile.notes) {
        await schedulePianoVoice(note, baseTime);

        const noteOnTimer = window.setTimeout(() => {
          updatePianoActivity(note.midi, true);
        }, Math.max(0, note.time * 1000));

        const noteOffTimer = window.setTimeout(() => {
          updatePianoActivity(note.midi, false);
        }, Math.max(0, (note.time + note.duration + 0.08) * 1000));

        midiTimerIdsRef.current.push(noteOnTimer, noteOffTimer);
      }

      midiProgressTimerRef.current = window.setInterval(() => {
        if (!midiFile || midiStartPerfRef.current === null) {
          return;
        }

        const elapsed = (performance.now() - midiStartPerfRef.current) / 1000;
        setMidiProgress(Math.min(midiFile.duration, Math.max(0, elapsed)));
      }, 50);

      const endTimer = window.setTimeout(() => {
        stopMidiPlayback({
          message: `Finished playing ${midiFile.name}.`,
        });
        setMidiProgress(midiFile.duration);
      }, midiFile.duration * 1000 + 320);

      midiTimerIdsRef.current.push(endTimer);
    } catch {
      setMidiStatus("This browser could not start Web Audio.");
    }
  }

  async function handlePreviewKey(midi: number) {
    stopTypingPlayback();

    try {
      const context = await ensureAudioReady();
      const previewNote: ParsedMidiNote = {
        duration: 0.32,
        id: `preview-${midi}-${Date.now()}`,
        label: formatNoteLabel(midi),
        midi,
        time: 0,
        velocity: 0.9,
      };

      await schedulePianoVoice(previewNote, context.currentTime);
      updatePianoActivity(midi, true);

      const previewTimer = window.setTimeout(() => {
        updatePianoActivity(midi, false);
      }, 420);

      midiTimerIdsRef.current.push(previewTimer);
    } catch {
      setMidiStatus("This browser could not start Web Audio.");
    }
  }

  async function handleMidiUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    stopMidiPlayback({ resetProgress: true });
    setMidiLoading(true);
    setMidiError(null);
    setMidiStatus(`Loading ${file.name}...`);

    try {
      const buffer = await file.arrayBuffer();
      const midi = new Midi(buffer);
      const notes = midi.tracks
        .flatMap((track, trackIndex) =>
          track.notes.map((note, noteIndex) => ({
            duration: note.duration,
            id: `${trackIndex}-${noteIndex}-${note.ticks}`,
            label: formatNoteLabel(note.midi),
            midi: note.midi,
            time: note.time,
            velocity: note.velocity,
          })),
        )
        .sort((left, right) => left.time - right.time || left.midi - right.midi);

      if (notes.length === 0) {
        setMidiFile(null);
        setMidiStatus(`${file.name} loaded, but it did not contain playable note events.`);
        return;
      }

      const lowest = notes.reduce((minimum, note) => Math.min(minimum, note.midi), notes[0].midi);
      const highest = notes.reduce((maximum, note) => Math.max(maximum, note.midi), notes[0].midi);

      setMidiFile({
        bpm: midi.header.tempos[0]?.bpm ?? null,
        duration: Math.max(midi.duration, ...notes.map((note) => note.time + note.duration)),
        highest,
        lowest,
        name: file.name,
        noteCount: notes.length,
        notes,
        trackCount: midi.tracks.length,
      });
      setMidiProgress(0);
      setMidiStatus(`Loaded ${file.name}. Ready to play ${notes.length} notes.`);
    } catch {
      setMidiFile(null);
      setMidiError("That file could not be parsed as a standard MIDI file.");
      setMidiStatus("Upload a different MIDI file to try again.");
    } finally {
      setMidiLoading(false);
      event.target.value = "";
    }
  }

  const progressWidth = midiFile ? `${(midiProgress / midiFile.duration) * 100}%` : "0%";
  const visibleKeyboardRange = `${formatNoteLabel(PIANO_START)} to ${formatNoteLabel(PIANO_END)}`;

  return (
    <>
      <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan/15 bg-panel px-6 py-8 shadow-glow sm:px-8 sm:py-10 lg:px-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
            <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-300/12 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan/12 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.32em] text-amber-100">
                  Text Playback + MIDI Piano
                </div>
                <div className="space-y-4">
                  <h1 className="max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Type text like a performer or feed the page a MIDI file.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-cloud sm:text-xl">
                    This app has two lanes. The first replays any sentence into an
                    output panel with animated key presses and crisp typing clicks.
                    The second reads MIDI files and performs them on a virtual piano
                    keyboard in the browser.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <StatChip label="Text Lane" value="Animated keystrokes + live output" />
                  <StatChip label="MIDI Lane" value="Upload .mid files and play them" />
                  <StatChip label="Keyboard" value={`Visible piano: ${visibleKeyboardRange}`} />
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-white/8 bg-black/30 p-5 backdrop-blur">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                      Quick workflow
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Paste text, press play, or upload a MIDI and run the piano.
                    </p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] font-display text-lg tracking-[0.22em] text-white">
                    C4
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Enter text and choose a playback speed.",
                    "Watch the output panel fill in as if it were being typed.",
                    "Upload a MIDI file to light up the piano and hear the notes.",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan/20 bg-cyan/10 font-mono text-xs text-cyan">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-7 text-cloud">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section id="text-studio" className="py-12 sm:py-16">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.8rem] border border-white/8 bg-panel p-6 shadow-glow sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
                    Text Mode
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-tight text-white">
                    Type into the output panel
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted">
                  Source text: {Array.from(textInput).length} chars
                </div>
              </div>

              <label className="mt-6 block">
                <span className="mb-3 block text-sm font-medium text-cloud">Input text</span>
                <textarea
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                  className="min-h-[240px] w-full rounded-[1.4rem] border border-white/8 bg-black/25 px-4 py-4 text-base leading-7 text-white outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                  placeholder="Paste or type something here..."
                />
              </label>

              <div className="mt-6 rounded-[1.4rem] border border-white/8 bg-black/25 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-cloud">Playback speed</p>
                    <p className="mt-1 text-sm text-muted">{charactersPerSecond} characters per second</p>
                  </div>
                  <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-amber-100">
                    Typing clicks enabled
                  </div>
                </div>

                <input
                  type="range"
                  min={2}
                  max={18}
                  step={1}
                  value={charactersPerSecond}
                  onChange={(event) => setCharactersPerSecond(Number(event.target.value))}
                  className="mt-4 w-full accent-[#f59e0b]"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => void handlePlayText()}
                  className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate transition hover:bg-white"
                >
                  {typingIsPlaying ? "Replay text" : "Play text"}
                </button>
                <button
                  type="button"
                  onClick={() => stopTypingPlayback("Typing stopped. Press play to run it again.")}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/35 hover:text-cyan"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={handleResetOutput}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/35 hover:text-amber-100"
                >
                  Clear output
                </button>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">{typingStatus}</p>
            </div>

            <div className="rounded-[1.8rem] border border-white/8 bg-panel p-6 shadow-glow sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
                    Output
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-tight text-white">
                    Live typed result
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted">
                  Output: {Array.from(typedOutput).length} chars
                </div>
              </div>

              <div className="mt-6 min-h-[240px] rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
                <p className="min-h-[208px] whitespace-pre-wrap text-base leading-7 text-cloud">
                  {typedOutput || "Your played text will appear here, one character at a time."}
                </p>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-cloud">Keyboard mirror</p>
                    <p className="mt-1 text-sm text-muted">
                      The highlighted key follows the character currently being typed.
                    </p>
                  </div>
                  <div className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan">
                    {activeComputerKey ? `Active key: ${activeComputerKey}` : "Waiting"}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {COMPUTER_KEYBOARD_ROWS.map((row) => (
                    <div key={row.join("-")} className="flex flex-wrap gap-2">
                      {row.map((keyLabel) => {
                        const isActive = activeComputerKey === keyLabel;
                        const widthClass =
                          keyLabel === "SPACE"
                            ? "w-full justify-center sm:w-[22rem]"
                            : keyLabel === "ENTER"
                              ? "w-[5.5rem]"
                              : "w-11";

                        return (
                          <div
                            key={keyLabel}
                            className={`flex h-11 items-center justify-center rounded-2xl border text-xs font-semibold uppercase tracking-[0.18em] transition ${widthClass} ${
                              isActive
                                ? "border-amber-300/60 bg-amber-300/18 text-amber-50 shadow-[0_0_0_1px_rgba(252,211,77,0.25),0_16px_32px_rgba(245,158,11,0.18)]"
                                : "border-white/8 bg-white/[0.03] text-cloud"
                            }`}
                          >
                            {keyLabel}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section id="midi-studio" className="py-12 pb-20 sm:py-16 sm:pb-24">
        <Shell>
          <div className="rounded-[2rem] border border-cyan/15 bg-panel p-6 shadow-glow sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
                  MIDI Mode
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">
                  Upload a file and play it on the virtual piano
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                  The browser parses standard MIDI files, schedules the notes with
                  Web Audio, and lights up the keyboard while they play. You can also
                  click any key below to audition pitches by hand.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate transition hover:bg-white">
                    {midiLoading ? "Loading MIDI..." : "Choose MIDI file"}
                    <input
                      type="file"
                      accept=".mid,.midi,audio/midi,audio/x-midi"
                      onChange={(event) => void handleMidiUpload(event)}
                      className="hidden"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => void handlePlayMidi()}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/35 hover:text-cyan"
                  >
                    {midiIsPlaying ? "Replay MIDI" : "Play MIDI"}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      stopMidiPlayback({
                        message: "MIDI playback stopped.",
                      })
                    }
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/35 hover:text-amber-100"
                  >
                    Stop
                  </button>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted">{midiStatus}</p>
                {midiError ? <p className="mt-2 text-sm text-amber-100">{midiError}</p> : null}

                {midiFile ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <StatChip label="File" value={midiFile.name} />
                    <StatChip label="Tracks" value={`${midiFile.trackCount}`} />
                    <StatChip label="Notes" value={`${midiFile.noteCount}`} />
                    <StatChip
                      label="Tempo"
                      value={midiFile.bpm ? `${Math.round(midiFile.bpm)} BPM` : "Embedded tempo"}
                    />
                    <StatChip label="Duration" value={formatSeconds(midiFile.duration)} />
                    <StatChip label="Range" value={rangeLabel(midiFile.lowest, midiFile.highest)} />
                  </div>
                ) : null}
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-black/25 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                      Transport
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {midiFile
                        ? `Progress ${formatSeconds(midiProgress)} / ${formatSeconds(midiFile.duration)}`
                        : "Load a MIDI file to unlock the transport bar."}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted">
                    {midiIsPlaying ? "Playing" : "Idle"}
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-300 via-cyan to-sky-400 transition-[width] duration-150"
                    style={{ width: progressWidth }}
                  />
                </div>

                <div className="mt-6 overflow-x-auto rounded-[1.6rem] border border-white/8 bg-[#070b10] p-4">
                  <div className="min-w-[1080px]">
                    <div className="flex items-end">
                      {PIANO_WHITE_KEYS.map((key) => {
                        const whiteKeyActive = activePianoNotes.includes(key.midi);
                        const blackKeyActive = key.black ? activePianoNotes.includes(key.black.midi) : false;

                        return (
                          <div key={key.midi} className="relative w-12">
                            <button
                              type="button"
                              onClick={() => void handlePreviewKey(key.midi)}
                              className={`relative flex h-60 w-full flex-col justify-between rounded-b-[1.25rem] border border-white/10 px-2 pb-4 pt-5 text-left transition ${
                                whiteKeyActive
                                  ? "bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200 text-slate shadow-[0_20px_32px_rgba(245,158,11,0.16)]"
                                  : "bg-gradient-to-b from-white to-slate-200 text-slate"
                              }`}
                            >
                              <span className="font-display text-sm tracking-[0.16em]">{NOTE_NAMES[key.midi % 12]}</span>
                              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] opacity-70">
                                {key.label}
                              </span>
                            </button>

                            {key.black ? (
                              <button
                                type="button"
                                onClick={() => void handlePreviewKey(key.black!.midi)}
                                className={`absolute -right-[0.8rem] top-0 z-10 h-36 w-7 rounded-b-[0.9rem] border px-1 pb-3 pt-4 text-left transition ${
                                  blackKeyActive
                                    ? "border-cyan/40 bg-gradient-to-b from-cyan to-sky-400 text-slate shadow-[0_18px_24px_rgba(123,234,255,0.18)]"
                                    : "border-white/8 bg-gradient-to-b from-[#2f3945] to-black text-white"
                                }`}
                              >
                                <span className="block text-[0.5rem] font-semibold uppercase tracking-[0.2em]">
                                  {NOTE_NAMES[key.black.midi % 12]}
                                </span>
                              </button>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted">
                  The visible keyboard covers {visibleKeyboardRange}. Notes outside that
                  range still play, but only in-range keys can light up on screen.
                </p>
              </div>
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}

function clearTimeouts(timerIds: number[]) {
  timerIds.forEach((timerId) => {
    window.clearTimeout(timerId);
  });
  timerIds.length = 0;
}

function stopActiveVoices(voices: Map<string, VoiceRecord>, context: AudioContext | null) {
  voices.forEach((voice) => {
    const stopTime = Math.max(voice.startTime, context?.currentTime ?? voice.startTime);

    voice.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop(stopTime);
      } catch {}
    });

    voice.nodes.forEach((node) => {
      try {
        node.disconnect();
      } catch {}
    });
  });

  voices.clear();
}
