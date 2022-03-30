import { capital } from "../src";
describe("test add function", () => {
  it("should return string for capital(hello world)", () => {
    expect(capital("hello world")).toBe("Hello world");
  });
});
