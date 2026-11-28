import { describe, expect, it } from "vitest";
import { divideInputs } from "./divideInputs";

function unexpectedBranch(value: unknown): never {
  throw new Error(`Unexpected division result: ${String(value)}`);
}

describe("divideInputs", () => {
  it.each([
    [" 7.5 ", "2.5", 3],
    ["3", "-2", -1.5],
    ["0", "2", 0],
  ])("should divide %j by %j", (dividend, divisor, expected) => {
    expect(divideInputs(dividend, divisor).match(unexpectedBranch, (value) => value)).toBe(
      expected,
    );
  });

  it.each([
    [" ", "0", "Dividend is required."],
    ["7abc", "2", "Dividend must be a finite number."],
    ["7", "", "Divisor is required."],
    ["7", "Infinity", "Divisor must be a finite number."],
    ["7", "0", "Cannot divide by zero."],
    ["7", "-0", "Cannot divide by zero."],
    ["1e308", "1e-308", "The quotient is outside the finite number range."],
  ])("should reject %j divided by %j", (dividend, divisor, expected) => {
    expect(divideInputs(dividend, divisor).match((error) => error, unexpectedBranch)).toBe(
      expected,
    );
  });
});
