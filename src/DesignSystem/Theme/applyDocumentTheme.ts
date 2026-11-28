import * as stylex from "@stylexjs/stylex";
import { lightTheme } from "./lightTheme.stylex";
import type { Theme } from "./savedTheme";

const lightThemeClasses = stylex.props(lightTheme).className?.split(" ") ?? [];

export function applyDocumentTheme(theme: Theme) {
  const root = document.documentElement;
  const isLight = theme === "light";
  root.dataset.theme = theme;
  if (isLight) root.classList.add(...lightThemeClasses);

  return () => {
    if (isLight) root.classList.remove(...lightThemeClasses);
    delete root.dataset.theme;
  };
}
