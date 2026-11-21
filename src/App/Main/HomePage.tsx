import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router";
import { Card } from "@/DesignSystem/Card/Card";
import { Text } from "@/DesignSystem/Text/Text";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

const stack = [
  {
    name: "React & TypeScript",
    description: "Component-based UI with typed props and application state.",
  },
  {
    name: "Vite",
    description: "Local development, hot updates, and production builds.",
  },
  {
    name: "React Router",
    description: "Client-side routes with shared layout and browser history.",
  },
  {
    name: "Base UI & StyleX",
    description:
      "Headless interaction primitives styled with shared Night Owl tokens.",
  },
  {
    name: "Vitest & Oxlint",
    description: "Automated tests and lint checks for the template.",
  },
];

export function HomePage() {
  return (
    <>
      <title>Home | SPA Template</title>
      <section aria-labelledby="home-title" {...stylex.props(styles.hero)}>
        <Text variant="caption" tone="muted">
          React starter
        </Text>
        <h1 id="home-title" {...stylex.props(styles.title)}>
          SPA Template
        </h1>
        <Text tone="muted">
          A Vite starter with typed React components, shared navigation, and a
          local design system.
        </Text>
        <Link to="/design-system" {...stylex.props(styles.cta)}>
          Explore the design system <span aria-hidden="true">→</span>
        </Link>
      </section>
      <section aria-labelledby="stack-title" {...stylex.props(styles.stack)}>
        <Text as="h2" id="stack-title" variant="heading">
          Tech stack
        </Text>
        <div {...stylex.props(styles.grid)}>
          {stack.map(({ name, description }) => (
            <Card key={name} as="article">
              <div {...stylex.props(styles.details)}>
                <Text as="h3" variant="title">
                  {name}
                </Text>
                <Text tone="muted">{description}</Text>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = stylex.create({
  hero: {
    display: "grid",
    justifyItems: "start",
    gap: 12,
    paddingBlock: { default: 64, "@media (max-width: 600px)": 36 },
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.6rem, 7vw, 4.6rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.065em",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    paddingBlock: 9,
    paddingInline: 16,
    borderRadius: tokens.radius,
    backgroundColor: { default: tokens.accent, ":hover": tokens.accentHover },
    color: tokens.onAccent,
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "none",
    outlineColor: tokens.focus,
    outlineOffset: 3,
  },
  stack: { display: "grid", gap: 16 },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  },
  details: { display: "grid", gap: 6 },
});
