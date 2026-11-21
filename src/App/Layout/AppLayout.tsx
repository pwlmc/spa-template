import * as stylex from "@stylexjs/stylex";
import { Outlet, ScrollRestoration } from "react-router";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

export function AppLayout() {
  return (
    <div {...stylex.props(styles.shell)}>
      <AppHeader />
      <main {...stylex.props(styles.content)}>
        <Outlet />
      </main>
      <AppFooter />
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
  content: { flexGrow: 1, minWidth: 0 },
});
