import { generateCubicBezierPath } from "../src/shape";
import { pointFrom, type LocalPoint } from "@excalidraw/math";

describe("generateCubicBezierPath", () => {
  it("returns path for cubic bezier", () => {
    const points: readonly LocalPoint[] = [pointFrom(0, 0), pointFrom(10, 10)];
    const handles = [[pointFrom(0, 10), pointFrom(10, 0)] as const];
    expect(generateCubicBezierPath(points, handles)).toBe(
      "M0 0 C0 10 10 0 10 10",
    );
  });
});
