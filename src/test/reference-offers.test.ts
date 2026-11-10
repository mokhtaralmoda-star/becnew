import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const source = readFileSync("public/ref/ref.js", "utf8");
const catalog = source.match(/var CATS = (\[[\s\S]*?\n    \]);/);
if (!catalog?.[1]) throw new Error("Missing reference offer catalog");
const categories = runInNewContext(catalog[1]) as { en: string; d: number | null }[][];

describe("Discounts visible in the supplied original screenshots", () => {
  it("keeps Speero at 10 percent", () => {
    expect(categories[0]?.find((offer) => offer.en === "Speero")?.d).toBe(10);
  });
  it("keeps Klleoo at 15 percent", () => {
    expect(categories[0]?.find((offer) => offer.en === "Klleoo")?.d).toBe(15);
  });
  it("keeps Eulica Cafe at 15 percent", () => {
    expect(categories[4]?.find((offer) => offer.en === "Eulica Cafe")?.d).toBe(15);
  });
  it("does not invent an unseen Altobha discount", () => {
    expect(categories[0]?.find((offer) => offer.en === "Altobha")?.d).toBeNull();
  });
});