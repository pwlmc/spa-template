import * as stylex from "@stylexjs/stylex";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";
import { repositoryUrl } from "./repository";

export function AppFooter() {
  return (
    <footer {...stylex.props(styles.footer)}>
      React · TypeScript · Vite ·{" "}
      <a href={repositoryUrl} {...stylex.props(styles.link)}>
        GitHub repository
      </a>
    </footer>
  );
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
  link: { color: tokens.accent, outlineColor: tokens.focus },
});
