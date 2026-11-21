import * as stylex from "@stylexjs/stylex";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { useId } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  value?: string;
  required?: boolean;
}

export function Checkbox({ label, description, checked, defaultChecked, onCheckedChange, disabled, indeterminate, name, value, required }: CheckboxProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  return (
    <label htmlFor={id} {...stylex.props(styles.label, disabled && styles.disabled)}>
      <BaseCheckbox.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        indeterminate={indeterminate}
        name={name}
        value={value}
        required={required}
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : undefined}
        className={(state) => stylex.props(styles.control, (state.checked || state.indeterminate) && styles.checked, state.disabled && styles.disabledControl).className}
      >
        <BaseCheckbox.Indicator aria-hidden="true" {...stylex.props(styles.indicator)}>
          {indeterminate ? "−" : "✓"}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      <span {...stylex.props(styles.copy)}>
        <span id={labelId} {...stylex.props(styles.title)}>{label}</span>
        {description && <span id={descriptionId} {...stylex.props(styles.description)}>{description}</span>}
      </span>
    </label>
  );
}

const styles = stylex.create({
  label: { display: "flex", alignItems: "center", gap: 10, minHeight: 40, width: "fit-content", maxWidth: "100%", cursor: "pointer" },
  disabled: { opacity: 0.55, cursor: "not-allowed" },
  copy: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0 },
  title: { color: tokens.text, fontSize: 14, fontWeight: 500, lineHeight: 1.5, overflowWrap: "anywhere" },
  description: { color: tokens.muted, fontSize: 13, lineHeight: 1.5, overflowWrap: "anywhere" },
  control: {
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    flexShrink: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: 6,
    backgroundColor: tokens.surface,
    color: tokens.onAccent,
    outlineWidth: { default: 0, ":focus-visible": 2 },
    outlineStyle: "solid",
    outlineColor: tokens.focus,
    outlineOffset: 3,
    cursor: "pointer",
  },
  checked: { backgroundColor: tokens.accent, borderColor: tokens.accent },
  disabledControl: { cursor: "not-allowed" },
  indicator: { display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 800, lineHeight: 1 },
});
