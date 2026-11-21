import { createElement, type ComponentPropsWithRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextProps<E extends TextElement = "p"> = {
  as?: E;
  variant?: "body" | "small" | "caption" | "title" | "heading";
  tone?: "default" | "muted" | "danger";
} & Omit<ComponentPropsWithRef<E>, "as">;

/** Appearance never determines heading semantics; choose the element with `as`. */
export function Text<E extends TextElement = "p">({
  as, variant = "body", tone = "default", className, children, ...props
}: TextProps<E>) {
  const sx = stylex.props(styles.base, variants[variant], tones[tone]);
  return createElement(as ?? "p", {
    ...props, ...sx,
    className: className ? `${sx.className} ${className}` : sx.className,
  }, children);
}

const styles = stylex.create({
  base: { margin: 0, fontFamily: "inherit", overflowWrap: "anywhere" },
});
const variants = stylex.create({
  body: { fontSize: 14, fontWeight: 400, lineHeight: 1.7 },
  small: { fontSize: 13, fontWeight: 400, lineHeight: 1.5 },
  caption: { fontSize: 11, fontWeight: 700, lineHeight: 1.5, letterSpacing: "0.1em", textTransform: "uppercase" },
  title: { fontSize: 18, fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.02em" },
  heading: { fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.035em" },
});
const tones = stylex.create({
  default: { color: tokens.text },
  muted: { color: tokens.muted },
  danger: { color: tokens.danger },
});
