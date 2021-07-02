import validator from "validator";

const generator = require("generate-password");

export function createPassword(length = 10) {
  /**
   * @function createPassword() generates strong and robust password for client.
   * @argument {Number} length password length.
   * @returns {String} strong password.
   */
  if (typeof length !== "number")
    if (!validator.isNumeric(length)) throw new Error("INVALID_ARGUMENT_TYPE");

  length = Number(length);

  return generator.generate({
    length: length,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true
  });
}
