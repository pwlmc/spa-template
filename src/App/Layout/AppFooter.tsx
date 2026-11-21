import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export function AppFooter() {
  return <footer {...stylex.props(styles.footer)}>React · TypeScript · Vite</footer>;
}

const styles = stylex.create({
  footer: {
    marginTop: 56,
    paddingBlock: 24,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: tokens.border,
    fontSize: 12,
    color: tokens.muted,
  },
});
