import { Select as BaseSelect } from "@base-ui/react/select";
import * as stylex from "@stylexjs/stylex";
import { useId, type ComponentPropsWithRef } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface SelectProps
  extends Omit<
    ComponentPropsWithRef<"button">,
    "children" | "value" | "defaultValue" | "onChange" | "disabled" | "name" | "type"
  > {
  label: string;
  description?: string;
  error?: string;
  placeholder?: string;
  options: readonly { value: string; label: string; disabled?: boolean }[];
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

export function Select({
  label,
  description,
  error,
  placeholder = "Choose an option",
  options,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  name,
  required = false,
  id,
  form,
  className,
  "aria-describedby": describedBy,
  "aria-labelledby": labelledBy,
  "aria-invalid": invalid,
  ...triggerProps
}: SelectProps) {
  const generatedId = useId();
  const triggerId = id ?? generatedId;
  const labelId = `${triggerId}-label`;
  const descriptionId = `${triggerId}-description`;
  const errorId = `${triggerId}-error`;
  const helpIds = [describedBy, description && descriptionId, error && errorId]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div {...stylex.props(styles.field)}>
      <label id={labelId} htmlFor={triggerId} {...stylex.props(styles.label)}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <BaseSelect.Root<string>
        id={triggerId}
        items={options}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        name={name}
        required={required}
        form={form}
      >
        <BaseSelect.Trigger
          {...triggerProps}
          id={triggerId}
          type="button"
          form={form}
          aria-labelledby={[labelId, labelledBy].filter(Boolean).join(" ")}
          aria-describedby={helpIds}
          aria-invalid={error ? true : invalid}
          aria-required={required || undefined}
          className={(state) =>
            [
              stylex.props(
                styles.trigger,
                state.placeholder && styles.placeholder,
                state.open && styles.open,
                (Boolean(error) || invalid === true || invalid === "true") && styles.invalid,
                disabled && styles.disabled,
              ).className,
              className,
            ].filter(Boolean).join(" ")
          }
        >
          <BaseSelect.Value placeholder={placeholder} {...stylex.props(styles.value)} />
          <BaseSelect.Icon {...stylex.props(styles.icon)} aria-hidden="true">⌄</BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner
            align="start"
            sideOffset={6}
            collisionPadding={8}
            alignItemWithTrigger={false}
            {...stylex.props(styles.positioner)}
          >
            <BaseSelect.Popup {...stylex.props(styles.popup)}>
              <BaseSelect.List {...stylex.props(styles.list)}>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    disabled={option.disabled}
                    className={(state) => stylex.props(
                      styles.item,
                      state.selected && styles.selected,
                      state.highlighted && styles.highlighted,
                      state.disabled && styles.disabled,
                    ).className}
                  >
                    <BaseSelect.ItemText {...stylex.props(styles.itemText)}>
                      {option.label}
                    </BaseSelect.ItemText>
                    <BaseSelect.ItemIndicator aria-hidden="true">✓</BaseSelect.ItemIndicator>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      {description && <p id={descriptionId} {...stylex.props(styles.help)}>{description}</p>}
      {error && <p id={errorId} role="alert" {...stylex.props(styles.help, styles.error)}>{error}</p>}
    </div>
  );
}

const styles = stylex.create({
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
    width: "100%",
  },
  label: {
    color: tokens.text,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  trigger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    minHeight: 40,
    width: "100%",
    minWidth: 0,
    paddingBlock: 8,
    paddingInline: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: { default: tokens.border, ":hover": tokens.muted },
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    color: tokens.text,
    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "start",
    cursor: "pointer",
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 3,
    boxSizing: "border-box",
  },
  value: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  icon: { flexShrink: 0, color: tokens.muted },
  placeholder: { color: tokens.muted },
  open: { borderColor: tokens.accent },
  invalid: { borderColor: { default: tokens.danger, ":hover": tokens.danger } },
  disabled: { opacity: 0.45, cursor: "not-allowed" },
  positioner: { zIndex: 1000, maxWidth: "var(--available-width)" },
  popup: {
    width: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    maxHeight: "min(320px, var(--available-height))",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: tokens.raised,
    color: tokens.text,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    boxShadow: tokens.shadow,
    boxSizing: "border-box",
  },
  list: {
    minHeight: 0,
    overflowY: "auto",
    overscrollBehavior: "contain",
    padding: 4,
    scrollPaddingBlock: 4,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    minHeight: 40,
    paddingBlock: 8,
    paddingInline: 10,
    borderRadius: 6,
    fontSize: 14,
    lineHeight: "22px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
    boxSizing: "border-box",
  },
  itemText: { overflowWrap: "anywhere" },
  selected: { color: tokens.accent, fontWeight: 600 },
  highlighted: {
    backgroundColor: tokens.surface,
    outline: `2px solid ${tokens.focus}`,
    outlineOffset: -2,
  },
  help: { margin: 0, color: tokens.muted, fontSize: 13, lineHeight: 1.5 },
  error: { color: tokens.danger },
});
