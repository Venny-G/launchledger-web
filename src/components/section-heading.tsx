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
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
    </div>
  );
}

