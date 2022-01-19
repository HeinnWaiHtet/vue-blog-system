import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhBj_86WnzeC3bcC3FXeWZNgkjDIyDMLA",
  authDomain: "vue-blog-system-b0b23.firebaseapp.com",
  projectId: "vue-blog-system-b0b23",
  storageBucket: "vue-blog-system-b0b23.appspot.com",
  messagingSenderId: "1059829786144",
  appId: "1:1059829786144:web:cc85edf1c0f6bd33833e45",
};

//init firebase
let initialApp = initializeApp(firebaseConfig);

let db = getFirestore();
// let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let timestamp = Timestamp.now();

export { db, timestamp, initialApp };
