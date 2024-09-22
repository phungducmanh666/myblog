import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIn0rgstNHr9C47IE7mTBXR2yXJY4NLmM",
  authDomain: "myblog-6e8fa.firebaseapp.com",
  projectId: "myblog-6e8fa",
  storageBucket: "myblog-6e8fa.appspot.com",
  messagingSenderId: "839326965072",
  appId: "1:839326965072:web:abe33fcd6cd00db538a055",
  measurementId: "G-X9CZLLME9R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
