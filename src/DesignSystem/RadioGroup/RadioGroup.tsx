import * as stylex from "@stylexjs/stylex";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { useId } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface RadioGroupProps {
  label: string;
  description?: string;
  options: readonly { label: string; value: string; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

export function RadioGroup({ label, description, options, value, defaultValue, onValueChange, disabled, name, required }: RadioGroupProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  return (
    <div {...stylex.props(styles.field, disabled && styles.disabled)}>
      <div id={labelId} {...stylex.props(styles.title)}>{label}</div>
      {description && <p id={descriptionId} {...stylex.props(styles.description)}>{description}</p>}
      <BaseRadioGroup
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        name={name}
        required={required}
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : undefined}
        {...stylex.props(styles.options)}
      >
        {options.map((option, index) => {
          const optionLabelId = `${id}-option-${index}`;
          return (
            <label key={option.value} {...stylex.props(styles.option, (disabled || option.disabled) && styles.disabledOption, !disabled && option.disabled && styles.disabled)}>
              <BaseRadio.Root
                value={option.value}
                disabled={option.disabled}
                aria-labelledby={optionLabelId}
                className={(state) => stylex.props(styles.control, state.checked && styles.checked, state.disabled && styles.disabledOption).className}
              >
                <BaseRadio.Indicator aria-hidden="true" {...stylex.props(styles.indicator)} />
              </BaseRadio.Root>
              <span id={optionLabelId} {...stylex.props(styles.optionText)}>{option.label}</span>
            </label>
          );
        })}
      </BaseRadioGroup>
    </div>
  );
}

const styles = stylex.create({
  field: { display: "flex", flexDirection: "column", gap: 8, minWidth: 0, width: "100%" },
  title: { color: tokens.text, fontSize: 14, fontWeight: 600, lineHeight: 1.5 },
  description: { color: tokens.muted, fontSize: 13, lineHeight: 1.5, margin: 0 },
  options: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 },
  option: { display: "flex", alignItems: "center", gap: 10, minHeight: 40, maxWidth: "100%", cursor: "pointer" },
  optionText: { color: tokens.text, fontSize: 14, lineHeight: 1.5, overflowWrap: "anywhere" },
  disabled: { opacity: 0.55 },
  disabledOption: { cursor: "not-allowed" },
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
    borderRadius: "50%",
    backgroundColor: tokens.surface,
    outlineWidth: { default: 0, ":focus-visible": 2 },
    outlineStyle: "solid",
    outlineColor: tokens.focus,
    outlineOffset: 3,
    cursor: "pointer",
  },
  checked: { borderColor: tokens.accent, backgroundColor: tokens.accent },
  indicator: { display: "block", width: 8, height: 8, borderRadius: "50%", backgroundColor: tokens.onAccent },
});
