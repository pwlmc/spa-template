import { IconButton } from "@/DesignSystem/IconButton/IconButton";
import { useTheme } from "@/DesignSystem/Theme/useTheme";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      onClick={toggleTheme}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
      </svg>
    </IconButton>
  );
}

const LightThemeIcon = () => <path d="M20.9 13.4A9 9 0 0 1 10.6 3.1 9 9 0 1 0 20.9 13.4Z" />;

const DarkThemeIcon = () => (
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </>
);
