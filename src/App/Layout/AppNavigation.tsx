import * as stylex from "@stylexjs/stylex";
import { NavLink } from "react-router";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";
import { repositoryUrl } from "./repository";

export function AppNavigation() {
  return (
    <nav aria-label="Main navigation" {...stylex.props(styles.nav)}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => stylex.props(styles.link, isActive && styles.active).className}
      >
        Home
      </NavLink>
      <NavLink
        to="/example"
        className={({ isActive }) => stylex.props(styles.link, isActive && styles.active).className}
      >
        Example page
      </NavLink>
      <NavLink
        to="/design-system"
        className={({ isActive }) => stylex.props(styles.link, isActive && styles.active).className}
      >
        Design system
      </NavLink>
      <a href={repositoryUrl} {...stylex.props(styles.link)}>
        GitHub
      </a>
    </nav>
  );
}

const styles = stylex.create({
  nav: { display: "flex", flexWrap: "wrap", gap: 4 },
  link: {
    paddingBlock: 8,
    paddingInline: 12,
    borderRadius: tokens.radius,
    fontSize: 14,
    color: tokens.muted,
    textDecoration: "none",
    backgroundColor: { default: "transparent", ":hover": tokens.surface },
    outlineColor: tokens.focus,
  },
  active: { color: tokens.accent, backgroundColor: tokens.raised },
});
