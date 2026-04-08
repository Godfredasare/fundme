import clsx from "clsx";

export default function EmptyState({
  icon: Icon, title, description, action, className = ""
}) {
  return (
    <div className={clsx("empty-state", className)}>
      {Icon && (
        <div className="empty-state-icon">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-gray-400 max-w-xs mb-5">{description}</p>
      )}
      {action}
    </div>
  );
}