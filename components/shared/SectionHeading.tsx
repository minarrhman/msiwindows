type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-zinc-200">
          {description}
        </p>
      )}
    </div>
  );
}