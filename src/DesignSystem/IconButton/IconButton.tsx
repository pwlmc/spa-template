import type { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonProps } from "@/DesignSystem/Button/Button";

export interface IconButtonProps extends Omit<ButtonProps, "children" | "aria-label"> {
  "aria-label": string;
  children: ReactNode;
}

export function IconButton({ children, xstyle, loading, size = "md", ...props }: IconButtonProps) {
  return (
    <Button
      variant="secondary"
      {...props}
      size={size}
      loading={loading}
      xstyle={[styles.icon, sizes[size], xstyle]}
    >
      {!loading && <span {...stylex.props(styles.content)} aria-hidden="true">{children}</span>}
    </Button>
  );
}

const styles = stylex.create({
  icon: { paddingInline: 0, paddingBlock: 0 },
  content: { display: "inline-flex", alignItems: "center", justifyContent: "center" },
});

const sizes = stylex.create({
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 48, height: 48 },
});
