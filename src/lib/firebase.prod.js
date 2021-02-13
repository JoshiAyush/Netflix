import 'firebase/auth';
import 'firebase/firestore';
import Firebase from 'firebase/app';

import { seedDatabase } from "../seed.js";
import { firebaseConfig } from "./credentials.js";

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };