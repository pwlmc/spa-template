import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router";
import { Card } from "@/DesignSystem/Card/Card";
import { Section } from "@/DesignSystem/Section/Section";
import { Text } from "@/DesignSystem/Text/Text";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";
import { stack } from "./stack";

export function HomePage() {
  return (
    <>
      <title>Home | SPA Template</title>
      <Section aria-labelledby="stack-title" sx={styles.stack}>
        <Text as="h1" id="stack-title" variant="heading">
          Tech stack
        </Text>
        <div {...stylex.props(styles.grid)}>
          {stack.map(({ name, description, link }) => (
            <Card key={name} as="article">
              <div {...stylex.props(styles.details)}>
                <Text as="h3" variant="title">
                  {name}
                </Text>
                <Text tone="muted">{description}</Text>
                {link && (
                  <Link to={link.to} {...stylex.props(styles.cardLink)}>
                    {link.label} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

const styles = stylex.create({
  stack: { paddingBlockStart: 36 },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  },
  details: { display: "grid", gap: 6 },
  cardLink: {
    justifySelf: "start",
    marginTop: 4,
    color: tokens.accent,
    fontSize: 14,
    fontWeight: 700,
    outlineColor: tokens.focus,
    outlineOffset: 3,
  },
});
