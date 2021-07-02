import { validateName } from "../../../../netflix/form/lib/lib";
import { validateEmail } from "../../../../netflix/form/lib/lib";
import { validateMobile } from "../../../../netflix/form/lib/lib";

describe("validateName", () => {
  it("checks if a string is a universally accepted name or not", () => {
    expect(validateName("ayush")).toBe(true);
  });

  it("checks if a string is a universally accepted name or not", () => {
    expect(validateName("ayush1234")).toBe(false);
  });
});

describe("validateEmail", () => {
  it("checks if a string is a universally accepted email address or not", () => {
    expect(validateEmail("ayush854032@gmail.com")).toBe(true);
  });

  it("checks if a string is a universally accepted email address or not", () => {
    expect(validateEmail("ayush854032@.com")).toBe(false);
  });
});

describe("validateMobile", () => {
  it("checks if a string is a universally accepted mobile number or not", () => {
    expect(validateMobile("8941854032")).toBe(true);
  });

  it("checks if a string is a universally accepted mobile number or not", () => {
    expect(validateMobile("ayush")).toBe(false);
  });
});
