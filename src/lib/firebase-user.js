import { firebase } from "./firebase.prod.js";

import { UndefinedVariableException } from "../netflix/errors/errors.js";
import { PropertyDoesNotExistException } from "../netflix/errors/errors.js";

export function getFirebaseUser() {
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

  return firebase.auth().currentUser;
}
