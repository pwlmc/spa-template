import { type Either, flatMap2, left, right } from "ok-fp";

function parseNumber(input: string, label: "Dividend" | "Divisor"): Either<string, number> {
  const text = input.trim();
  if (text === "") return left(`${label} is required.`);

  const value = Number(text);
  return Number.isFinite(value) ? right(value) : left(`${label} must be a finite number.`);
}

function divide(dividend: number, divisor: number): Either<string, number> {
  if (divisor === 0) return left("Cannot divide by zero.");

  const quotient = dividend / divisor;
  return Number.isFinite(quotient)
    ? right(quotient)
    : left("The quotient is outside the finite number range.");
}

export function divideInputs(dividend: string, divisor: string): Either<string, number> {
  return flatMap2(parseNumber(dividend, "Dividend"), parseNumber(divisor, "Divisor"), divide);
}
