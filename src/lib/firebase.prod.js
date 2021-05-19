import "firebase/auth";
import "firebase/firestore";
import Firebase from "firebase/app";

import { firebaseConfig } from "./credentials.js";

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
