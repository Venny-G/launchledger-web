const xTicks = [
  { x: 88, label: "Today" },
  { x: 296, label: "2030" },
  { x: 502, label: "2035" },
  { x: 708, label: "2040" },
];

const gridRows = [72, 128, 184, 240, 296];

const trendSeries = [
  {
    label: "Satellite power availability",
    color: "#f1f6fa",
    points: [
      [88, 236],
      [296, 216],
      [502, 184],
      [708, 142],
    ],
  },
  {
    label: "Propulsion throughput requirements",
    color: "rgba(145, 213, 255, 0.7)",
    points: [
      [88, 258],
      [296, 228],
      [502, 178],
      [708, 118],
    ],
  },
  {
    label: "Multi-thruster architecture relevance",
    color: "rgba(145, 213, 255, 0.5)",
    points: [
      [88, 278],
      [296, 244],
      [502, 188],
      [708, 108],
    ],
  },
  {
    label: "Clustered propulsion relevance",
    color: "#91d5ff",
    points: [
      [88, 292],
      [296, 266],
      [502, 214],
      [708, 136],
    ],
    dashArray: "7 7",
  },
];

const verticalGrid = xTicks.map((tick) => tick.x);

function toPointString(points: number[][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

export function PressureTrendsFigure() {
  return (
    <figure className="mx-auto w-full max-w-[68rem] rounded-[1.6rem] border border-white/8 bg-panel px-4 py-5 shadow-glow sm:px-6 sm:py-6">
      <div className="space-y-3">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan/75">
            Why this trend matters
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Why Clustered Electric Propulsion Matters by 2040
          </h3>
          <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
            Higher-power spacecraft and more demanding missions increase the
            need for scalable electric propulsion architectures.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-slate">
          <div className="h-[320px] w-full sm:h-[350px] lg:h-[390px]">
            <svg
              viewBox="0 0 796 360"
              className="h-full w-full"
              role="img"
              aria-labelledby="pressure-trends-title pressure-trends-desc"
            >
              <title id="pressure-trends-title">
                Why Clustered Electric Propulsion Matters by 2040
              </title>
              <desc id="pressure-trends-desc">
                A qualitative pressure-trend figure showing satellite power
                availability, propulsion throughput requirements, multi-thruster
                architecture relevance, and clustered propulsion relevance
                increasing from today through 2040.
              </desc>

              <rect x="0" y="0" width="796" height="360" fill="#111923" />

              {gridRows.map((y) => (
                <line
                  key={y}
                  x1="88"
                  y1={y}
                  x2="708"
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              ))}

              {verticalGrid.map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="52"
                  x2={x}
                  y2="312"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                />
              ))}

              <line
                x1="88"
                y1="312"
                x2="708"
                y2="312"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
              />

              {trendSeries.map((series) => (
                <g key={series.label}>
                  <polyline
                    fill="none"
                    points={toPointString(series.points)}
                    stroke={series.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={series.dashArray}
                  />
                  {series.points.map(([x, y], index) => (
                    <circle
                      key={`${series.label}-${x}-${y}`}
                      cx={x}
                      cy={y}
                      r={index === series.points.length - 1 ? "4.5" : "3.5"}
                      fill={series.color}
                    />
                  ))}
                </g>
              ))}

              {xTicks.map((tick) => (
                <g key={tick.label}>
                  <line
                    x1={tick.x}
                    y1="312"
                    x2={tick.x}
                    y2="318"
                    stroke="rgba(255,255,255,0.28)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={tick.x}
                    y="338"
                    textAnchor="middle"
                    fontSize="13"
                    fill="rgba(223,231,238,0.92)"
                  >
                    {tick.label}
                  </text>
                </g>
              ))}

              <text
                x="88"
                y="28"
                fontSize="12"
                fill="rgba(153,168,181,0.85)"
                letterSpacing="0.2em"
              >
                QUALITATIVE PRESSURE TREND
              </text>
            </svg>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trendSeries.map((series) => (
            <div
              key={series.label}
              className="flex items-center gap-3 rounded-full border border-white/8 bg-black/10 px-3 py-2"
            >
              <span
                className="block h-[2px] w-8 shrink-0 rounded-full"
                style={{
                  backgroundColor: series.color,
                  backgroundImage: series.dashArray
                    ? `repeating-linear-gradient(to right, ${series.color} 0 8px, transparent 8px 14px)`
                    : undefined,
                }}
              />
              <span className="text-xs leading-6 text-cloud sm:text-sm">
                {series.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-2 pt-1">
          <p className="text-sm leading-7 text-cloud">
            Clustered propulsion becomes more relevant as mission power and
            throughput requirements scale.
          </p>
          <p className="text-xs leading-6 text-muted sm:text-sm">
            Examples include high-power GEO platforms, logistics vehicles,
            cargo tugs, and deep-space transfer systems.
          </p>
        </div>
      </div>
    </figure>
  );
}
