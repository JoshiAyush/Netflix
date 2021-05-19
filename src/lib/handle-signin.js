import { firebase } from "./firebase.prod.js";

const parseErrorMessage = (errormessage) => {
  /**
   * @function parseErrorMessage() parse the object given by firebase.
   *
   * @argument {String} errormessage is the string that needs to be parsed.
   *
   * We are parsing the error message given by Firebase because the firbase given object is something like this,
   *
   * {
   *  code: "auth/internal-error",
   *    message: "{
   *  "error": {
   *  "code": 400,
   *           "message": "CONFIGURATION_NOT_…T_FOUND",    // Error Message
   *           "domain": "global",
   *           "reason": "invalid"
   *        }
   *    }",
   *   a: null
   * }
   *
   * you see the error message is actually a stringified object so we need to parse this object first in order to get
   * the actual error message on the screen.
   *
   * We implement Exception handling because if the firbase authentication is not enabled then the error message is
   * something like we show you in the above example otherwise we will be having a error message in the form of a
   * plain text.
   *
   * @return {String} parsed error message if firebase returned a valid JSON string.
   */
  try {
    return JSON.parse(errormessage);
  } catch (err) {
    return false;
  }
};

export function handleSignIn({ userEmail, userPassword }, setError = null) {
  if (typeof userEmail != "string" || typeof userPassword != "string")
    throw new Error("ARGUMENT_TYPE_MISMATCH");

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      return true;
    })
    .catch((error) => {
      if (setError != null && typeof setError == "function")
        setError(parseErrorMessage(error.message) || error.message);
      return false;
    });
}
