import validator from "validator";

import { createPassword } from "../../../netflix/form/password";

describe("createPassword", () => {
  it("creates strong and robust password", () => {
    expect(validator.isStrongPassword(createPassword(10))).toBe(true);
  });
});
