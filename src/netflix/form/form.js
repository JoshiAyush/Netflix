/**
 * @file src/validate.js helps us to validate the user's email, first name, last name and mobile number during the time of Signing
 * up as well as Signing in both the times this validating functionality is useful.
 */
import { validateEmail } from "./lib/form-lib.js";
import { validateMobile } from "./lib/form-lib";
import { validateLastName } from "./lib/form-lib.js";
import { validateFirstName } from "./lib/form-lib.js";

export function validateForm(fname, lname, mobile, email) {
  /**
   * @function validateForm() validates the form that the user just filled.
   *
   * @argument {String} fname first name of the user.
   * @argument {String} lname last name of the user.
   * @argument {String} mobile mobile number of the user.
   * @argument {String} email email address of the user.
   *
   * This function checks if all the field are valid or not if it founds the field to be valid then this function returns true if
   * not then this function returns false.
   */
  try {
    return (
      validateEmail(email) &&
      validateMobile(mobile) &&
      validateLastName(lname) &&
      validateFirstName(fname) &&
      true
    );
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }
}
