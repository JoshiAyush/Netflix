import { firebase } from "./firebase.prod.js";

import { UndefinedVariableException } from "../netflix/errors/errors.js";
import { ArgumentTypeMisMatchException } from "../netflix/errors/errors.js";
import { PropertyDoesNotExistException } from "../netflix/errors/errors.js";

export function handleSignIn({ userEmail, userPassword }, setError = null) {
  if (typeof firebase === "undefined")
    throw new UndefinedVariableException(
      "UndefinedVariableException",
      "firebase"
    );

  if ("auth" in firebase)
    throw new PropertyDoesNotExistException(
      "PropertyDoesNotExistException",
      "auth"
    );

  if (typeof userEmail != "string" || typeof userPassword != "string")
    throw new ArgumentTypeMisMatchException(
      "ArgumentTypeMisMatchException",
      "userEmail",
      "userPassword"
    );

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      return true;
    })
    .catch((error) => {
      if (setError == null || typeof setError != "function") return false;

      try {
        setError(JSON.parse(error.message));
      } catch (error) {
        setError(error.message);
      }

      return false;
    });
}
