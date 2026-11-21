import type { ReactElement } from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface TooltipProps {
  children: ReactElement;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, content, side = "top" }: TooltipProps) {
  return (
    <BaseTooltip.Provider delay={400} closeDelay={100}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} sideOffset={8} collisionPadding={16} {...stylex.props(styles.positioner)}>
            <BaseTooltip.Popup {...stylex.props(styles.popup)}>{content}</BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

const styles = stylex.create({
  positioner: { zIndex: 1200 },
  popup: {
    boxSizing: "border-box", maxWidth: "min(280px, calc(100vw - 32px))", maxHeight: "var(--available-height)", overflowY: "auto",
    paddingBlock: 8, paddingInline: 12, borderWidth: 1, borderStyle: "solid", borderColor: tokens.border,
    borderRadius: tokens.radius, backgroundColor: tokens.raised, color: tokens.text, boxShadow: tokens.shadow,
    fontSize: 13, lineHeight: 1.5, overflowWrap: "anywhere",
  },
});
