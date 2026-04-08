import clsx from "clsx";
import { getInitials } from "../../utils/formatters";

const sizes = {
  sm: "avatar-sm",
  md: "avatar-md",
  lg: "avatar-lg",
  xl: "avatar-xl",
};

const colors = [
  "bg-sky-500", "bg-violet-500", "bg-emerald-500",
  "bg-amber-500", "bg-rose-500", "bg-indigo-500",
];

function colorFromName(name = "") {
  const code = name.charCodeAt(0) || 0;
  return colors[code % colors.length];
}

export default function Avatar({ name = "", src, size = "md", className = "" }) {
  return (
    <div className={clsx(sizes[size], colorFromName(name), className)}>
      {src
        ? <img src={src} alt={name} className="w-full h-full object-cover" />
        : <span>{getInitials(name)}</span>
      }
    </div>
  );
}