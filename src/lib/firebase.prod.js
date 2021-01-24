import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import { seedDatabase } from '../seed';

const firebaseConfig = {
    // your configurations
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };