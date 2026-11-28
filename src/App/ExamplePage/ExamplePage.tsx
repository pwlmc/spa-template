import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { Card } from "@/DesignSystem/Card/Card";
import { Section } from "@/DesignSystem/Section/Section";
import { Text } from "@/DesignSystem/Text/Text";
import { TextField } from "@/DesignSystem/TextField/TextField";
import { divideInputs } from "./divideInputs";

export function ExamplePage() {
  const [dividend, setDividend] = useState("12");
  const [divisor, setDivisor] = useState("3");
  const result = divideInputs(dividend, divisor);

  return (
    <>
      <title>ok-fp example | SPA Template</title>
      <Section aria-labelledby="ok-fp-title" sx={styles.page}>
        <Text as="h1" id="ok-fp-title" variant="heading">
          Safe division with ok-fp
        </Text>
        <Text tone="muted">
          The helper uses Either to return a number or the first error. Try a zero divisor or clear
          an input to see the error branch.
        </Text>
        <Card {...stylex.props(styles.calculator)}>
          <TextField
            label="Dividend"
            inputMode="decimal"
            value={dividend}
            onChange={(event) => setDividend(event.currentTarget.value)}
          />
          <TextField
            label="Divisor"
            inputMode="decimal"
            value={divisor}
            onChange={(event) => setDivisor(event.currentTarget.value)}
          />
          <div role="status">
            {result.match(
              (error) => (
                <Text tone="danger">{error}</Text>
              ),
              (quotient) => (
                <Text>Result: {String(quotient)}</Text>
              ),
            )}
          </div>
        </Card>
      </Section>
    </>
  );
}

const styles = stylex.create({
  page: { maxWidth: 560, paddingBlock: 36 },
  calculator: { display: "grid", gap: 16 },
});
