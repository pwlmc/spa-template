// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { getSavedTheme, saveTheme } from "./savedTheme";

beforeEach(() => {
  vi.unstubAllGlobals();
  localStorage.clear();
});

describe("saved theme", () => {
  it.each([false, true])(
    "should follow the system preference when dark mode is %s and no choice is saved",
    (matches) => {
      vi.stubGlobal("matchMedia", () => ({ matches }));

      expect(getSavedTheme()).toBe(matches ? "dark" : "light");
    },
  );

  it("should prefer a saved choice over the system preference", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));

    saveTheme("light");

    expect(getSavedTheme()).toBe("light");
  });

  it("should ignore an invalid saved choice", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));
    localStorage.setItem("spa-template-theme", "invalid");

    expect(getSavedTheme()).toBe("dark");
  });

  it("should fall back to the system preference when storage cannot be read", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("Storage blocked", "SecurityError");
    });

    expect(getSavedTheme()).toBe("dark");
  });

  it("should return a failure when storage cannot be written", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("Storage blocked", "SecurityError");
    });

    expect(saveTheme("light").toResult().ok).toBe(false);
  });
});
