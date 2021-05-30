import { firebase } from "./firebase.prod.js";

import { UndefinedVariableException } from "../netflix/errors/errors.js";
import { ArgumentTypeMisMatchException } from "../netflix/errors/errors.js";
import { PropertyDoesNotExistException } from "../netflix/errors/errors.js";

export function handleSignUp(
  { userName = "", userEmail, userPassword } = {},
  setError = null
) {
  if (typeof firebase === "undefined")
    throw new UndefinedVariableException(
      "UndefinedVariableException",
      "firebase"
    );

  if (firebase.hasOwnProperty("auth"))
    throw new PropertyDoesNotExistException(
      "PropertyDoesNotExistException",
      "auth"
    );

  if (
    typeof userEmail != "string" ||
    typeof userPassword != "string" ||
    (userName && typeof userName != "string")
  )
    throw new ArgumentTypeMisMatchException(
      "ArgumentTypeMisMatchException",
      "userEmail",
      "userPassword",
      "userName"
    );

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPassword)
    .then((result) => {
      if (userName == null) return true;

      result.user
        .updateProfile({
          displayName: userName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
        .then(() => {
          return true;
        })
        .catch((err) => {
          if (setError != null && typeof setError == "function")
            setError(err.message);
          return false;
        });
    })
    .catch((err) => {
      if (setError != null && typeof setError == "function")
        setError(err.message);
      return false;
    });
}
