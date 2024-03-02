import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEAfdMt6F3xTzHXde2TxQW_LDxv4SXquY",
  authDomain: "todo-app-25a7c.firebaseapp.com",
  projectId: "todo-app-25a7c",
  storageBucket: "todo-app-25a7c.appspot.com",
  messagingSenderId: "260417248276",
  appId: "1:260417248276:web:aaf7d24a3c0bc2287c9b01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const todosCollection = collection(db, "todos");