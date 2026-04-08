import { forwardRef } from "react";
import clsx from "clsx";

const variants = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  ghost:     "btn-ghost",
  danger:    "btn-danger",
  link:      "btn-link",
};
const sizes = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const AppButton = forwardRef(({
  children, variant = "primary", size = "md",
  loading = false, icon: Icon, iconRight: IconRight,
  className = "", ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-70" />
      ) : Icon ? (
        <Icon className="h-4 w-4 shrink-0" />
      ) : null}
      {children}
      {!loading && IconRight && <IconRight className="h-4 w-4 shrink-0" />}
    </button>
  );
});
AppButton.displayName = "AppButton";
export default AppButton;