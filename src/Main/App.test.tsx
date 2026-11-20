import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders a Hello World heading", () => {
    const markup = renderToStaticMarkup(<App />);

    expect(markup).toContain("Hello,");
    expect(markup).toContain("World!");
  });
});
