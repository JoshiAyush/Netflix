import { firebase } from "./firebase.prod.js";

export function getFirebaseUser() {
  return firebase.auth().currentUser;
}
