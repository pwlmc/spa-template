import * as stylex from "@stylexjs/stylex";
import type { ComponentPropsWithRef } from "react";

type SectionProps = ComponentPropsWithRef<"section"> & {
  sx?: stylex.StyleXStyles;
};

export function Section({ sx, className, style, ...props }: SectionProps) {
  const layout = stylex.props(styles.section, sx);
  return (
    <section
      {...props}
      className={className ? `${layout.className} ${className}` : layout.className}
      style={style ? { ...layout.style, ...style } : layout.style}
    />
  );
}

const styles = stylex.create({
  section: { display: "grid", gap: 16 },
});
