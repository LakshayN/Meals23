import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCU5h35-z3A7QQx_4e_-pZBZ-dDtc-6lO0",
  authDomain: "meal2023-7af91.firebaseapp.com",
  projectId: "meal2023-7af91",
  storageBucket: "meal2023-7af91.appspot.com",
  messagingSenderId: "128141154555",
  appId: "1:128141154555:web:19b1abd405f43fd0b3f85e",
  measurementId: "G-W03NKQGR8C",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
