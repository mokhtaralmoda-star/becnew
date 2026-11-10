import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const dir = join(process.cwd(), "public/ref");
const pages = readdirSync(dir).filter((f) => f.endsWith(".html"));

describe("Copied product pages", () => {
  it("has Arabic and English copies for desktop, tablet and phone", () => {
    for (const name of ["motor", "mm", "travel", "helpers", "medical", "landing-mm", "landing-travel", "landing-helpers", "landing-medical"]) {
      for (const lang of ["ar", "en"]) {
        for (const v of ["", "-t", "-m"]) expect(pages).toContain(`${name}-${lang}${v}.html`);
      }
    }
  });

  it("contains no link that leaves the site", () => {
    for (const page of pages) {
      const html = readFileSync(join(dir, page), "utf8");
      const external = html.match(/<a\b[^>]*\shref="(https?:)?\/\/[^"]*"/gi) ?? [];
      expect(external, page).toEqual([]);
    }
  });

  it("loads no third-party images or trackers", () => {
    for (const page of pages) {
      const html = readFileSync(join(dir, page), "utf8");
      const remote = html.match(/<(img|script|iframe)\b[^>]*\ssrc="(https?:)?\/\/[^"]*"/gi) ?? [];
      expect(remote, page).toEqual([]);
    }
  });

  it("contains no form that submits to another site", () => {
    for (const page of pages) {
      const html = readFileSync(join(dir, page), "utf8");
      expect(/<form\b[^>]*\saction=/i.test(html), page).toBe(false);
    }
  });
});
