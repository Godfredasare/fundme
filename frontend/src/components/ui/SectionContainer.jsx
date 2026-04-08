import clsx from "clsx";

export default function SectionContainer({
  children, title, subtitle, action,
  className = "", inner = false,
}) {
  return (
    <section className={clsx(inner ? "" : "space-y-4", className)}>
      {(title || action) && (
        <div className="flex items-start justify-between gap-4">
          <div className="section-header mb-0">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}

