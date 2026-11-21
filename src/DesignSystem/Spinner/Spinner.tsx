import * as stylex from "@stylexjs/stylex";
import { VisuallyHidden } from "@/DesignSystem/VisuallyHidden/VisuallyHidden";

export interface SpinnerProps {
  label?: string;
  size?: "sm" | "md";
  decorative?: boolean;
}

export function Spinner({ label = "Loading", size = "md", decorative = false }: SpinnerProps) {
  return (
    <span
      {...stylex.props(styles.spinner, size === "sm" && styles.small)}
      role={decorative ? undefined : "status"}
      aria-hidden={decorative || undefined}
    >
      {!decorative && <VisuallyHidden>{label}</VisuallyHidden>}
    </span>
  );
}

const spin = stylex.keyframes({
  to: { transform: "rotate(360deg)" },
});

const styles = stylex.create({
  spinner: {
    display: "inline-block",
    flexShrink: 0,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "currentColor",
    borderInlineEndColor: "transparent",
    borderRadius: "50%",
    animationName: spin,
    animationDuration: "800ms",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: {
      default: "running",
      "@media (prefers-reduced-motion: reduce)": "paused",
    },
    verticalAlign: "middle",
  },
  small: { width: 16, height: 16 },
});
