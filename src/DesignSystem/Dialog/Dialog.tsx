import type { ReactElement, ReactNode } from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface DialogProps {
  trigger: ReactElement;
  title: string;
  description?: string;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
}: DialogProps) {
  return (
    <BaseDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <BaseDialog.Trigger render={trigger} />
      <BaseDialog.Portal>
        <BaseDialog.Backdrop {...stylex.props(styles.backdrop)} />
        <BaseDialog.Popup {...stylex.props(styles.popup)}>
          <div {...stylex.props(styles.header)}>
            <BaseDialog.Title {...stylex.props(styles.title)}>{title}</BaseDialog.Title>
            <BaseDialog.Close
              type="button"
              aria-label="Close dialog"
              {...stylex.props(styles.close)}
            >
              ×
            </BaseDialog.Close>
          </div>
          {description !== undefined && (
            <BaseDialog.Description {...stylex.props(styles.description)}>
              {description}
            </BaseDialog.Description>
          )}
          <div {...stylex.props(styles.content)}>{children}</div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

const styles = stylex.create({
  backdrop: { position: "fixed", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 1000 },
  popup: {
    boxSizing: "border-box",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(calc(100vw - 32px), 480px)",
    maxHeight: "calc(100dvh - 32px)",
    overflowY: "auto",
    padding: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    backgroundColor: tokens.surface,
    color: tokens.text,
    boxShadow: tokens.shadow,
    zIndex: 1000,
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 2,
  },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 },
  title: { margin: 0, fontSize: 20, lineHeight: 1.4, fontWeight: 650, overflowWrap: "anywhere" },
  description: { marginTop: 8, marginBottom: 0, color: tokens.muted, lineHeight: 1.6 },
  content: { marginTop: 20 },
  close: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    padding: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    color: tokens.text,
    backgroundColor: { default: tokens.surface, ":hover": tokens.raised },
    fontSize: 26,
    cursor: "pointer",
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 2,
  },
});
