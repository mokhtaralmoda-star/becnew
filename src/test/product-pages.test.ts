import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

function paths(route: typeof routeTree): string[] {
  const self = (route.options as { path?: string } | undefined)?.path ?? route.path ?? "";
  return [
    self,
    ...Object.values(route.children ?? {}).flatMap((child) => paths(child as typeof routeTree)),
  ];
}

const productPages = [
  "/travel-insurance",
  "/medical-malpractice",
  "/domestic-workers",
  "/medical-insurance",
];

describe("Product pages", () => {
  it("has its own page for every product tab", () => {
    const owned = paths(routeTree);
    for (const page of productPages) {
      expect(owned).toContain(page);
    }
  });

  it("keeps every product tab pointing at a different page", () => {
    const shell = readFileSync(join(process.cwd(), "src/components/bc/Headers.tsx"), "utf8");
    const targets = productPages.filter((page) => (shell.includes(`to="${page}"`) || shell.includes(`to: "${page}"`)));
    expect(targets.sort()).toEqual([...productPages].sort());
  });
});

describe("No external destinations", () => {
  it("keeps every link inside the app", () => {
    const dirs = ["src/components/site", "src/components/bc", "src/routes"];
    const files = dirs.flatMap((dir) =>
      readdirSync(join(process.cwd(), dir))
        .filter((f) => /\.tsx?$/.test(f))
        .map((f) => join(process.cwd(), dir, f)),
    );
    const offenders = files
      .map((file) => {
        const source = readFileSync(file, "utf8");
        const external = source.match(/(?:href|to)="https?:\/\/[^"]+"/g) ?? [];
        return external.length ? `${file}: ${external.join(", ")}` : null;
      })
      .filter((x): x is string => x !== null);
    expect(offenders).toEqual([]);
  });
});
