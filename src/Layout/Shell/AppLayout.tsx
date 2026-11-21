import * as stylex from "@stylexjs/stylex";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export function AppLayout() {
  return (
    <div {...stylex.props(styles.shell)}>
      <header {...stylex.props(styles.header)}>
        <Link to="/" {...stylex.props(styles.brand)}>
          <span {...stylex.props(styles.mark)} aria-hidden="true">sp.</span>
          SPA Template
        </Link>
        <nav aria-label="Main navigation" {...stylex.props(styles.nav)}>
          <NavLink to="/" end className={({ isActive }) => stylex.props(styles.link, isActive && styles.active).className}>
            Home
          </NavLink>
          <NavLink to="/design-system" className={({ isActive }) => stylex.props(styles.link, isActive && styles.active).className}>
            Design system
          </NavLink>
        </nav>
      </header>
      <main {...stylex.props(styles.content)}>
        <Outlet />
      </main>
      <footer {...stylex.props(styles.footer)}>React · TypeScript · Vite</footer>
      <ScrollRestoration />
    </div>
  );
}

const styles = stylex.create({
  shell: {
    minHeight: "100vh",
    maxWidth: 1160,
    marginInline: "auto",
    paddingInline: { default: 32, "@media (max-width: 600px)": 20 },
    display: "flex",
    flexDirection: "column",
    color: tokens.text,
    lineHeight: 1.6,
  },
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
  content: { flexGrow: 1, minWidth: 0 },
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
