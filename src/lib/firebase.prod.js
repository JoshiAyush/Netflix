import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from "./credentials.js";
import { seedDatabase } from "../seed.js";

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };