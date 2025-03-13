import { sum } from "../index";
describe("Math Functions", () => {
  test("adds two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
