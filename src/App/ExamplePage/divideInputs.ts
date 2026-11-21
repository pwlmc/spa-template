import { type Either, left, map2, right } from "ok-fp";

function parseNumber(
  input: string,
  label: "Dividend" | "Divisor",
): Either<string, number> {
  const text = input.trim();
  if (text === "") return left(`${label} is required.`);

  const value = Number(text);
  return Number.isFinite(value)
    ? right(value)
    : left(`${label} must be a finite number.`);
}

export function divideInputs(
  dividend: string,
  divisor: string,
): Either<string, number> {
  return map2(
    parseNumber(dividend, "Dividend"),
    parseNumber(divisor, "Divisor"),
    (dividend, divisor) => dividend / divisor,
  );
}
