import { expect, test } from "bun:test";
import { greet } from "./add";

test("greet", () => {
  expect(greet("bo")).toBe("hi bo");
});
