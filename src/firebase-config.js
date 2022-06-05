import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfPlkW_uf7wvFdxuCXLp864pcvn10iYtA",
  authDomain: "kijiji-clone.firebaseapp.com",
  projectId: "kijiji-clone",
  storageBucket: "kijiji-clone.appspot.com",
  messagingSenderId: "724483715642",
  appId: "1:724483715642:web:ce7ad012421cdf6acc7b03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
