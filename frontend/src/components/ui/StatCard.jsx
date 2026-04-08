import clsx from "clsx";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const accents = {
  sky:     { bg: "bg-sky-50",     icon: "text-sky-500",     border: "border-sky-100" },
  green:   { bg: "bg-green-50",   icon: "text-green-500",   border: "border-green-100" },
  amber:   { bg: "bg-amber-50",   icon: "text-amber-500",   border: "border-amber-100" },
  violet:  { bg: "bg-violet-50",  icon: "text-violet-500",  border: "border-violet-100" },
  rose:    { bg: "bg-rose-50",    icon: "text-rose-500",    border: "border-rose-100" },
};

export default function StatCard({
  label, value, sub, icon: Icon,
  trend, trendLabel, accent = "sky",
  className = "",
}) {
  const a = accents[accent] || accents.sky;

  const TrendIcon = trend === "up"
    ? TrendingUp
    : trend === "down"
    ? TrendingDown
    : Minus;

  const trendColor = trend === "up"
    ? "text-green-600"
    : trend === "down"
    ? "text-red-500"
    : "text-gray-400";

  return (
    <div className={clsx("stat-card", className)}>
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest leading-none">
          {label}
        </p>
        {Icon && (
          <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center", a.bg)}>
            <Icon className={clsx("h-4 w-4", a.icon)} />
          </div>
        )}
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>

      {trendLabel && (
        <div className={clsx("flex items-center gap-1.5 text-xs font-medium", trendColor)}>
          <TrendIcon className="h-3.5 w-3.5" />
          {trendLabel}
        </div>
      )}
    </div>
  );
}