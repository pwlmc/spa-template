import type { ReactElement, ReactNode } from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface PopoverProps {
  trigger: ReactElement;
  title: string;
  description?: string;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ trigger, title, description, children, open, defaultOpen, onOpenChange }: PopoverProps) {
  return (
    <BasePopover.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <BasePopover.Trigger render={trigger} />
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={8} align="start" collisionPadding={16} {...stylex.props(styles.positioner)}>
          <BasePopover.Popup {...stylex.props(styles.popup)}>
            <div {...stylex.props(styles.header)}>
              <BasePopover.Title {...stylex.props(styles.title)}>{title}</BasePopover.Title>
              <BasePopover.Close type="button" aria-label="Close popover" {...stylex.props(styles.close)}>×</BasePopover.Close>
            </div>
            {description !== undefined && <BasePopover.Description {...stylex.props(styles.description)}>{description}</BasePopover.Description>}
            <div {...stylex.props(styles.content)}>{children}</div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}

const styles = stylex.create({
  positioner: { zIndex: 1100 },
  popup: {
    boxSizing: "border-box", width: 300, maxWidth: "calc(100vw - 32px)", maxHeight: "var(--available-height)", overflowY: "auto",
    padding: 20, borderWidth: 1, borderStyle: "solid", borderColor: tokens.border, borderRadius: tokens.radius,
    backgroundColor: tokens.surface, color: tokens.text, boxShadow: tokens.shadow,
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` }, outlineOffset: 2,
  },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
  title: { margin: 0, fontSize: 16, lineHeight: 1.5, fontWeight: 650, overflowWrap: "anywhere" },
  description: { marginTop: 8, marginBottom: 0, color: tokens.muted, fontSize: 14, lineHeight: 1.6 },
  content: { marginTop: 16 },
  close: {
    display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    width: 40, height: 40, padding: 0, borderWidth: 1, borderStyle: "solid", borderColor: tokens.border,
    borderRadius: tokens.radius, backgroundColor: { default: tokens.surface, ":hover": tokens.raised }, color: tokens.text,
    fontSize: 26, cursor: "pointer", outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` }, outlineOffset: 2,
  },
});
