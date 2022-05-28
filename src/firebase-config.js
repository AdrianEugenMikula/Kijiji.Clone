import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfPlkW_uf7wvFdxuCXLp864pcvn10iYtA",
  authDomain: "kijiji-clone.firebaseapp.com",
  projectId: "kijiji-clone",
  storageBucket: "kijiji-clone.appspot.com",
  messagingSenderId: "724483715642",
  appId: "1:724483715642:web:ce7ad012421cdf6acc7b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

