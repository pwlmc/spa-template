import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";
import { AppNavigation } from "./AppNavigation";

export function AppHeader() {
  return (
    <header {...stylex.props(styles.header)}>
      <Link to="/" {...stylex.props(styles.brand)}>
        <span {...stylex.props(styles.mark)} aria-hidden="true">sp.</span>
        SPA Template
      </Link>
      <AppNavigation />
    </header>
  );
}

const styles = stylex.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    paddingBlock: 20,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.border,
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: tokens.text,
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "none",
    outlineColor: tokens.focus,
  },
  mark: {
    display: "inline-grid",
    placeItems: "center",
    width: 36,
    height: 36,
    borderRadius: tokens.radius,
    backgroundColor: tokens.accent,
    color: tokens.onAccent,
    fontSize: 18,
  },
});
