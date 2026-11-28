// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import { applyDocumentTheme } from "./applyDocumentTheme";

const root = document.documentElement;

describe("applyDocumentTheme", () => {
  beforeEach(() => {
    root.className = "";
  });

  it("should apply the light theme and its StyleX overrides", () => {
    const initialClasses = [...root.classList];

    applyDocumentTheme("light");

    expect(root.dataset.theme).toBe("light");
    expect(root.classList.length).toBeGreaterThan(initialClasses.length);
  });

  it("should apply the dark theme without adding light overrides", () => {
    const initialClasses = [...root.classList];

    applyDocumentTheme("dark");

    expect(root.dataset.theme).toBe("dark");
    expect([...root.classList]).toEqual(initialClasses);
  });

  it("should remove the theme on cleanup without touching unrelated classes", () => {
    root.classList.add("existing-class");
    const initialClasses = [...root.classList];

    applyDocumentTheme("light")();

    expect(root.dataset.theme).toBeUndefined();
    expect([...root.classList]).toEqual(initialClasses);
  });
});
