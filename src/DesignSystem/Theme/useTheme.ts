import { useCallback, useLayoutEffect, useState } from "react";
import { applyDocumentTheme } from "./applyDocumentTheme";
import { getSavedTheme, saveTheme } from "./savedTheme";

export function useTheme() {
  const [theme, setTheme] = useState(getSavedTheme);

  useLayoutEffect(() => applyDocumentTheme(theme), [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    void saveTheme(nextTheme);
  }, [theme]);

  return { theme, toggleTheme };
}
