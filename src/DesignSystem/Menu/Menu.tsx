import type { ReactElement } from "react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface MenuItem {
  id: string;
  label: string;
  disabled?: boolean;
  destructive?: boolean;
  onSelect: () => void;
}

export interface MenuProps {
  trigger: ReactElement;
  items: readonly MenuItem[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Menu({ trigger, items, open, defaultOpen, onOpenChange }: MenuProps) {
  return (
    <BaseMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <BaseMenu.Trigger render={trigger} />
      <BaseMenu.Portal>
        <BaseMenu.Positioner
          sideOffset={8}
          align="start"
          collisionPadding={16}
          {...stylex.props(styles.positioner)}
        >
          <BaseMenu.Popup {...stylex.props(styles.popup)}>
            {items.map((item) => (
              <BaseMenu.Item
                key={item.id}
                label={item.label}
                disabled={item.disabled}
                closeOnClick
                onClick={() => {
                  if (!item.disabled) item.onSelect();
                }}
                className={(state) =>
                  stylex.props(
                    styles.item,
                    item.destructive && styles.destructive,
                    state.highlighted && styles.highlighted,
                    state.disabled && styles.disabled,
                  ).className
                }
              >
                {item.label}
              </BaseMenu.Item>
            ))}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}

const styles = stylex.create({
  positioner: { zIndex: 1100 },
  popup: {
    boxSizing: "border-box",
    minWidth: "min(200px, calc(100vw - 32px))",
    maxWidth: "calc(100vw - 32px)",
    maxHeight: "var(--available-height)",
    overflowY: "auto",
    padding: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    color: tokens.text,
    boxShadow: tokens.shadow,
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 2,
  },
  item: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    minHeight: 40,
    paddingBlock: 8,
    paddingInline: 12,
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
    lineHeight: 1.5,
    overflowWrap: "anywhere",
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: -2,
  },
  highlighted: { backgroundColor: tokens.raised },
  destructive: { color: tokens.danger },
  disabled: { opacity: 0.45, cursor: "not-allowed" },
});
