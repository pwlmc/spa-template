import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders a Hello World heading", () => {
    expect(renderToStaticMarkup(<App />)).toContain("Hello, World!");
  });
});
