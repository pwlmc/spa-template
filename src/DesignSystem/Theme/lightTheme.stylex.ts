import * as stylex from "@stylexjs/stylex";
import { tokens } from "./tokens.stylex";

export const lightTheme = stylex.createTheme(tokens, {
  canvas: "#f6f6f6",
  surface: "#ffffff",
  raised: "#eeeeee",
  border: "#e1e1e1",
  text: "#171717",
  muted: "#595959",
  accent: "#050505",
  accentHover: "#282828",
  onAccent: "#ffffff",
  danger: "#bf212f",
  dangerSurface: "#fff0f1",
  dangerSurfaceHover: "#ffe0e3",
  success: "#166534",
  successSurface: "#dcfce7",
  focus: "#325eaa",
  radius: "10px",
  shadow: "0 18px 60px rgba(0, 0, 0, 0.12)",
});
