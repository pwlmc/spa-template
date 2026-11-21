import type { ComponentPropsWithRef } from "react";
import * as stylex from "@stylexjs/stylex";

export type VisuallyHiddenProps = ComponentPropsWithRef<"span">;

export function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  const sx = stylex.props(styles.hidden);
  return <span {...props} {...sx} className={className ? `${sx.className} ${className}` : sx.className} />;
}

const styles = stylex.create({
  hidden: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
});
