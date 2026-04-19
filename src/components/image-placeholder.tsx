type ImagePlaceholderProps = {
  title: string;
  description: string;
  note?: string;
  className?: string;
  frameClassName?: string;
};

export function ImagePlaceholder({
  title,
  description,
  note,
  className = "",
  frameClassName = "min-h-[16rem]",
}: ImagePlaceholderProps) {
  return (
    <div className={`border border-white/8 bg-slate ${className}`}>
      <div className={`flex h-full flex-col justify-between p-4 sm:p-5 ${frameClassName}`}>
        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
            Insert image
          </p>
          <div className="border border-white/8 bg-black/15 p-4 sm:p-5">
            <p className="text-sm font-semibold text-white">[{title}]</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              {description}
            </p>
          </div>
        </div>
        {note ? (
          <p className="mt-4 text-xs leading-6 text-muted">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
