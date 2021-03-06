import { firebase } from "./firebase.prod.js";

import { UndefinedVariableException } from "../netflix/errors/errors.js";
import { PropertyDoesNotExistException } from "../netflix/errors/errors.js";

export function handleSignOut() {
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

  firebase.auth().signOut();
}
