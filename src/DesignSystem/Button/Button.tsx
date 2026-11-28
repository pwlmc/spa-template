import type { ComponentPropsWithRef } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";
import { Spinner } from "@/DesignSystem/Spinner/Spinner";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  xstyle?: stylex.StyleXStyles;
}

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  className,
  children,
  xstyle,
  ...props
}: ButtonProps) {
  const sx = stylex.props(
    styles.button,
    variants[variant],
    sizes[size],
    (disabled || loading) && styles.disabled,
    xstyle,
  );
  return (
    <BaseButton
      {...props}
      {...sx}
      className={className ? `${sx.className} ${className}` : sx.className}
      type={type}
      disabled={disabled || loading}
      focusableWhenDisabled={loading}
      aria-busy={loading || props["aria-busy"]}
    >
      {loading && <Spinner size="sm" decorative />}
      {children}
    </BaseButton>
  );
}

const styles = stylex.create({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    gap: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: tokens.radius,
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.4,
    textDecoration: "none",
    cursor: "pointer",
    userSelect: "none",
    outline: { default: "none", ":focus-visible": `2px solid ${tokens.focus}` },
    outlineOffset: 3,
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const variants = stylex.create({
  primary: {
    backgroundColor: { default: tokens.accent, ":hover": tokens.accentHover },
    color: tokens.onAccent,
  },
  secondary: {
    backgroundColor: { default: tokens.raised, ":hover": tokens.border },
    borderColor: tokens.border,
    color: tokens.text,
  },
  ghost: {
    backgroundColor: { default: "transparent", ":hover": tokens.raised },
    color: tokens.text,
  },
  danger: {
    backgroundColor: { default: tokens.dangerSurface, ":hover": tokens.dangerSurfaceHover },
    borderColor: tokens.danger,
    color: tokens.danger,
  },
});

const sizes = stylex.create({
  sm: { minHeight: 32, paddingBlock: 6, paddingInline: 12, fontSize: 12 },
  md: { minHeight: 40, paddingBlock: 9, paddingInline: 16 },
  lg: { minHeight: 48, paddingBlock: 12, paddingInline: 20, fontSize: 16 },
});
