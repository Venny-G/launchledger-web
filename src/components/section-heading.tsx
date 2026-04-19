type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-2.5 ${alignment}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-cyan/75">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
