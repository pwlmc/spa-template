import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { TextField } from "@/DesignSystem/TextField/TextField";
import { TextArea } from "@/DesignSystem/TextArea/TextArea";

describe.each(["input", "textarea"] as const)("%s accessibility", (tag) => {
  it("should keep caller context alongside the description and validation error", () => {
    const props = {
      label: "Contact details",
      description: "Only visible to your team",
      error: "Contact details are required",
      "aria-describedby": "external-context",
    };
    const markup = renderToStaticMarkup(
      tag === "input" ? <TextField {...props} /> : <TextArea {...props} />,
    );
    const control = markup.match(new RegExp(`<${tag}\\b[^>]*>`))?.[0];
    const descriptionId = markup.match(/<p id="([^"]+)"[^>]*>Only visible to your team<\/p>/)?.[1];
    const errorId = markup.match(/<p id="([^"]+)"[^>]*>Contact details are required<\/p>/)?.[1];

    expect(descriptionId).toBeDefined();
    expect(errorId).toBeDefined();
    expect(control).toContain('aria-invalid="true"');
    expect(control).toContain(`aria-describedby="external-context ${descriptionId} ${errorId}"`);
  });

  it("should associate the visible label with a caller-supplied control ID", () => {
    const props = { id: "contact", label: "Contact details", required: true };
    const markup = renderToStaticMarkup(
      tag === "input" ? <TextField {...props} /> : <TextArea {...props} />,
    );
    const control = markup.match(new RegExp(`<${tag}\\b[^>]*>`))?.[0];

    expect(markup).toMatch(/<label[^>]*for="contact"[^>]*>Contact details<\/label>/);
    expect(control).toContain('id="contact"');
    expect(control).toContain('required=""');
  });
});
