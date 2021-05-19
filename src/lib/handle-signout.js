import { firebase } from "./firebase.prod.js";

export function handleSignOut() {
  firebase.auth().signOut();
}
