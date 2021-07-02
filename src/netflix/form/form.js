import { validateName } from "./lib/lib.js";
import { validateEmail } from "./lib/lib.js";
import { validateMobile } from "./lib/lib.js";

export function validateForm(fname, lname, mobile, email) {
  /**
   * @function validateForm() validates the field filled in a form by user.
   * @argument {String} fname field first name.
   * @argument {String} lname field last name.
   * @argument {String} email field email address.
   * @argument {String} mobile field mobile number.
   * @returns {Boolean} true if all the fields are correct otherwise false.
   */
  return (
    validateName(fname) &&
    validateName(lname) &&
    validateEmail(email) &&
    validateMobile(mobile)
  );
}
