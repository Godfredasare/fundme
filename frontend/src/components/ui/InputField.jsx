import clsx from "clsx";

export default function InputField({
  label, hint, error, prefix, suffix,
  className = "", inputClassName = "", ...props
}) {
  return (
    <div className={clsx("field-wrapper", className)}>
      {label && <label className="field-label">{label}</label>}
      <div className="relative">
        {prefix && <span className="input-prefix">{prefix}</span>}
        <input
          className={clsx(
            "input",
            prefix && "pl-9",
            suffix && "pr-9",
            error && "input-error",
            inputClassName
          )}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {hint && !error && <p className="field-hint">{hint}</p>}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}