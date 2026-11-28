import { Either } from "ok-fp";

const THEME_STORAGE_KEY = "spa-template-theme";
export type Theme = "dark" | "light";

function isTheme(theme: unknown): theme is Theme {
  return theme === "dark" || theme === "light";
}

export function getSavedTheme(): Theme {
  const defaultTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return Either.tryCatch(() => window.localStorage.getItem(THEME_STORAGE_KEY)).match(
    () => defaultTheme,
    (saved) => (isTheme(saved) ? saved : defaultTheme),
  );
}

export function saveTheme(theme: Theme) {
  return Either.tryCatch(() => window.localStorage.setItem(THEME_STORAGE_KEY, theme));
}
