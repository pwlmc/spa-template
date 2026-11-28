import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export function FeedbackBanner({
  tone,
  children,
}: {
  tone: "success" | "error";
  children: ReactNode;
}) {
  return (
    <p role={tone === "error" ? "alert" : "status"} {...stylex.props(styles.banner, styles[tone])}>
      {children}
    </p>
  );
}

const styles = stylex.create({
  banner: {
    margin: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "currentColor",
    padding: "10px 12px",
    borderRadius: tokens.radius,
    fontSize: 14,
  },
  success: { color: tokens.success, backgroundColor: tokens.successSurface },
  error: { color: tokens.danger, backgroundColor: tokens.dangerSurface },
});
