interface PageHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  number,
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] pt-32 md:pt-40 lg:pt-48">
      <div className="container pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Label */}
          <div className="lg:col-span-3">
            <div className="section-label">
              {number} — {eyebrow}
            </div>
          </div>

          {/* Main heading */}
          <div className="lg:col-span-9">
            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.055em]">
              {title}
            </h1>

            {description && (
              <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}