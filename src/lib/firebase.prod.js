import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyBwaM_jiBbb7aJEAOHyv2jTuUlsFGT9PYE",
    authDomain: "netflix-77adb.firebaseapp.com",
    projectId: "netflix-77adb",
    storageBucket: "netflix-77adb.appspot.com",
    messagingSenderId: "426270832945",
    appId: "1:426270832945:web:a97e6c2c1ad528de09d810"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };