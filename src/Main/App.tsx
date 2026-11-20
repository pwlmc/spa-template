import * as stylex from "@stylexjs/stylex";

export default function App() {
  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.card)}>Hello world!</section>
    </main>
  );
}

const styles = stylex.create({
  page: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "clamp(24px, 5vw, 80px)",
  },
  card: {
    backgroundColor: "rgba(17, 25, 48, 0.86)",
    border: "1px solid #2c3e69",
    borderRadius: "4px",
    boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35)",
    maxWidth: "680px",
    padding: "clamp(32px, 7vw, 72px)",
    width: "100%",
  },
  eyebrow: {
    color: "#9db1ff",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    margin: "0 0 20px",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "clamp(3rem, 10vw, 6.5rem)",
    letterSpacing: "-0.06em",
    lineHeight: 0.95,
    margin: 0,
  },
  accent: {
    color: "#8ef0d0",
    display: "block",
  },
  description: {
    color: "#b7c3dc",
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.7,
    margin: "28px 0 0",
    maxWidth: "48ch",
  },
});
