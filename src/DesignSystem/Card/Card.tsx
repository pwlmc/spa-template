import { createElement, type ComponentPropsWithRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

type CardElement = "div" | "section" | "article";
export type CardProps<E extends CardElement = "div"> = {
  as?: E;
  variant?: "default" | "raised";
  padding?: "none" | "sm" | "md" | "lg";
} & Omit<ComponentPropsWithRef<E>, "as">;

/** A noninteractive surface; put links and buttons inside rather than on the card. */
export function Card<E extends CardElement = "div">({
  as, variant = "default", padding = "md", className, children, ...props
}: CardProps<E>) {
  const sx = stylex.props(styles.base, variant === "raised" && styles.raised, paddings[padding]);
  return createElement(as ?? "div", {
    ...props, ...sx,
    className: className ? `${sx.className} ${className}` : sx.className,
  }, children);
}

const styles = stylex.create({
  base: {
    minWidth: 0, borderWidth: 1, borderStyle: "solid", borderColor: tokens.border,
    borderRadius: tokens.radius, backgroundColor: tokens.surface, color: tokens.text,
  },
  raised: { backgroundColor: tokens.raised, boxShadow: tokens.shadow },
});
const paddings = stylex.create({
  none: { padding: 0 },
  sm: { padding: 16 },
  md: { padding: 24 },
  lg: { padding: { default: 32, "@media (max-width: 600px)": 20 } },
});
