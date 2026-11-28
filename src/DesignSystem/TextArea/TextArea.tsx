import * as stylex from "@stylexjs/stylex";
import { forwardRef, useId, type ComponentPropsWithRef } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export type TextAreaProps = ComponentPropsWithRef<"textarea"> & {
  label: string;
  description?: string;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    label,
    description,
    error,
    id,
    rows = 4,
    disabled,
    className,
    "aria-describedby": describedBy,
    "aria-invalid": invalid,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-input`;
  const labelId = `${generatedId}-label`;
  const descriptionId = `${generatedId}-description`;
  const errorId = `${generatedId}-error`;
  const descriptions = [
    describedBy,
    description ? descriptionId : undefined,
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ");
  const controlStyles = stylex.props(styles.input, !!error && styles.invalid);

  return (
    <div {...stylex.props(styles.field, disabled && styles.disabled)}>
      <label id={labelId} htmlFor={inputId} {...stylex.props(styles.label)}>
        {label}
      </label>
      {description && (
        <p id={descriptionId} {...stylex.props(styles.description)}>
          {description}
        </p>
      )}
      <textarea
        {...props}
        {...controlStyles}
        className={[controlStyles.className, className].filter(Boolean).join(" ")}
        ref={ref}
        id={inputId}
        rows={rows}
        disabled={disabled}
        aria-invalid={error ? true : invalid}
        aria-describedby={descriptions || undefined}
      />
      {error && (
        <p id={errorId} {...stylex.props(styles.error)}>
          {error}
        </p>
      )}
    </div>
  );
});

const styles = stylex.create({
  field: { display: "flex", flexDirection: "column", gap: 8, width: "100%", minWidth: 0 },
  label: { color: tokens.text, fontSize: 14, fontWeight: 600, lineHeight: 1.5 },
  description: { color: tokens.muted, fontSize: 13, lineHeight: 1.5, margin: 0 },
  error: { color: tokens.danger, fontSize: 13, lineHeight: 1.5, margin: 0 },
  disabled: { opacity: 0.55 },
  input: {
    boxSizing: "border-box",
    width: "100%",
    minWidth: 0,
    minHeight: 40,
    resize: "vertical",
    paddingBlock: 9,
    paddingInline: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: { default: tokens.border, ":focus-visible": tokens.focus },
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    color: { default: tokens.text, "::placeholder": tokens.muted },
    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: "20px",
    outlineWidth: { default: 0, ":focus-visible": 2 },
    outlineStyle: "solid",
    outlineColor: tokens.focus,
    outlineOffset: 2,
    cursor: { default: "text", ":disabled": "not-allowed" },
  },
  invalid: { borderColor: tokens.danger },
});
