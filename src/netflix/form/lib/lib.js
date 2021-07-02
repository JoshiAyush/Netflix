import validator from "validator";

export function validateName(name) {
  /**
   * @function validateName() checks if the given string is a valid name or not.
   * @argument {String} name user name.
   * @returns {Boolean} ture if the field is a valid name field otherwise false.
   */
  if (typeof name !== "string") return false;

  if (validator.isEmpty(name) || !validator.isAlpha(name)) return false;

  return true;
}

export function validateEmail(email) {
  /**
   * @function validateEmail() checks if the given string is a valid email address or not.
   * @argument {String} email user email address.
   * @returns {Boolean} true if the given string is a valid email address otherwise false.
   */
  if (typeof email != "string") return false;

  return validator.isEmail(email);
}

export function validateMobile(mobile) {
  /**
   * @function validateMobile() checks if the given string is a mobile number or not.
   * @argument {String} mobile user mobile number.
   * @returns {Boolean} true if the given string is a valid mobile number otherwise false.
   */
  if (typeof mobile != "string") return false;

  return validator.isMobilePhone(mobile);
}
