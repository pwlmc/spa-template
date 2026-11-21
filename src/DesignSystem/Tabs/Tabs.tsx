import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import * as stylex from "@stylexjs/stylex";
import { type ComponentPropsWithRef, type ReactNode } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface TabsProps
  extends Omit<ComponentPropsWithRef<"div">, "children" | "defaultValue" | "onChange"> {
  label: string;
  items: readonly {
    value: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
  }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  label,
  items,
  value,
  defaultValue,
  onValueChange,
  className,
  ...rootProps
}: TabsProps) {
  const initialValue = defaultValue ?? items.find((item) => !item.disabled)?.value ?? null;

  return (
    <BaseTabs.Root
      {...rootProps}
      orientation="horizontal"
      value={value}
      defaultValue={initialValue}
      onValueChange={(nextValue: unknown) => {
        if (typeof nextValue === "string") onValueChange?.(nextValue);
      }}
      className={[stylex.props(styles.root).className, className].filter(Boolean).join(" ")}
    >
      <BaseTabs.List aria-label={label} activateOnFocus {...stylex.props(styles.list)}>
        {items.map((item) => (
          <BaseTabs.Tab
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            type="button"
            className={(state) => stylex.props(
              styles.tab,
              state.active && styles.active,
              state.disabled && styles.disabled,
            ).className}
          >
            {item.label}
          </BaseTabs.Tab>
        ))}
      </BaseTabs.List>
      {items.map((item) => (
        <BaseTabs.Panel key={item.value} value={item.value} {...stylex.props(styles.panel)}>
          {item.content}
        </BaseTabs.Panel>
      ))}
    </BaseTabs.Root>
  );
}

const styles = stylex.create({
  root: { width: "100%", minWidth: 0 },
  list: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    maxWidth: "100%",
    overflowX: "auto",
    overscrollBehaviorX: "contain",
    padding: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    boxSizing: "border-box",
    scrollbarWidth: "thin",
  },
  tab: {
    flexShrink: 0,
    minHeight: 40,
    paddingBlock: 8,
    paddingInline: 16,
    borderWidth: 0,
    borderRadius: 6,
    backgroundColor: { default: "transparent", ":hover": tokens.raised },
    color: { default: tokens.muted, ":hover": tokens.text },
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "24px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 2,
  },
  active: {
    backgroundColor: { default: tokens.accent, ":hover": tokens.accentHover },
    color: { default: tokens.onAccent, ":hover": tokens.onAccent },
  },
  disabled: {
    opacity: 0.45,
    cursor: "not-allowed",
    backgroundColor: { default: "transparent", ":hover": "transparent" },
    color: { default: tokens.muted, ":hover": tokens.muted },
  },
  panel: {
    marginTop: 12,
    padding: 20,
    minWidth: 0,
    overflowWrap: "anywhere",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    color: tokens.text,
    fontSize: 14,
    lineHeight: 1.6,
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 3,
    boxSizing: "border-box",
  },
});
