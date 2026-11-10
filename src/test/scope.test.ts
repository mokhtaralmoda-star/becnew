import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
function paths(route: typeof routeTree): string[] {
  const self = (route.options as { path?: string } | undefined)?.path ?? route.path ?? "";
  return [
    self,
    ...Object.values(route.children ?? {}).flatMap((child) => paths(child as typeof routeTree)),
  ];
}
describe("Requested page exclusions", () => {
  it("does not include insurance offer pages", () => {
    expect(paths(routeTree).filter((p) => /offer|compare/i.test(p))).toEqual([]);
  });
  it("does not include payment pages", () => {
    expect(paths(routeTree).filter((p) => /payment|checkout|otp|nafath/i.test(p))).toEqual([]);
  });
});
