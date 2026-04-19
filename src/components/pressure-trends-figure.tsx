import { ImagePlaceholder } from "@/components/image-placeholder";

export function PressureTrendsFigure() {
  return (
    <figure className="mx-auto w-full max-w-[66rem] border border-white/8 bg-panel px-4 py-5 shadow-glow sm:px-6 sm:py-6 lg:px-8">
      <div className="space-y-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Why This Matters Through 2040
            </h3>
            <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
              Higher-power spacecraft and more demanding missions increase
              pressure for multi-thruster propulsion architectures.
            </p>
          </div>
          <p className="text-xs leading-6 text-cloud lg:text-right">
            Qualitative industry view, not a forecast.
          </p>
        </div>

        <ImagePlaceholder
          title="Industry trend figure"
          description="A qualitative chart showing spacecraft power availability, propulsion throughput requirements, and clustered propulsion relevance rising from today through 2040."
          note="Use a real market or industry slide, a custom trend chart, or a sourced conference figure."
          frameClassName="min-h-[18rem] sm:min-h-[20rem] lg:min-h-[23rem]"
        />

        <div className="space-y-2 pt-1">
          <p className="text-sm leading-7 text-cloud">
            Clustered propulsion becomes more relevant as mission power and
            throughput demands grow.
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
