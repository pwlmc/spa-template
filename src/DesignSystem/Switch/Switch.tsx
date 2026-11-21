import * as stylex from "@stylexjs/stylex";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { useId } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface SwitchProps {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  required?: boolean;
}

export function Switch({ label, description, checked, defaultChecked, onCheckedChange, disabled, name, value, required }: SwitchProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  return (
    <label htmlFor={id} {...stylex.props(styles.label, disabled && styles.disabled)}>
      <BaseSwitch.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        name={name}
        value={value}
        required={required}
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : undefined}
        className={(state) => stylex.props(styles.control, state.checked && styles.checked, state.disabled && styles.disabledControl).className}
      >
        <BaseSwitch.Thumb
          className={(state) => stylex.props(styles.thumb, state.checked && styles.thumbChecked).className}
        />
      </BaseSwitch.Root>
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
    width: 44,
    height: 26,
    padding: 3,
    flexShrink: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: 999,
    backgroundColor: tokens.raised,
    outlineWidth: { default: 0, ":focus-visible": 2 },
    outlineStyle: "solid",
    outlineColor: tokens.focus,
    outlineOffset: 3,
    cursor: "pointer",
  },
  checked: { backgroundColor: tokens.accent, borderColor: tokens.accent },
  disabledControl: { cursor: "not-allowed" },
  thumb: { display: "block", width: 18, height: 18, borderRadius: "50%", backgroundColor: tokens.muted, transform: "translateX(0)" },
  thumbChecked: { backgroundColor: tokens.onAccent, transform: "translateX(18px)" },
});
