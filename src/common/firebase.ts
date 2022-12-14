// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { AllTyp } from "./types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Nv2oraGr4XUp3E8L-EcDrD_pc_3iT4o",
  authDomain: "practice-c0ebc.firebaseapp.com",
  projectId: "practice-c0ebc",
  storageBucket: "practice-c0ebc.appspot.com",
  messagingSenderId: "906542762131",
  appId: "1:906542762131:web:7c00cc9a80d854869c6566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB_NAME = "pool";
const FS = getFirestore(app);

const poolConverter = {
  fromFirestore: (ss: QueryDocumentSnapshot<AllTyp>) => {
    return ss.data();
  },
  toFirestore: (model: AllTyp) => model,
};
const DB = collection(FS, DB_NAME).withConverter(poolConverter);

export const fetchData = async () => {
  const res = await getDocs(DB);
  const item = res.docs.map((item) => item.data());
  return item;
};

export const familyFetch = async (id: string) => {
  const famQuery = query(collection(FS, DB_NAME), where("id", "==", id));
  const converted = famQuery.withConverter(poolConverter);
  const res = await getDocs(converted);
  const item = res.docs.map((item) => item.data());
  return item[0];
};

export const addData = async (data: AllTyp) => {
  await addDoc(DB, data);
};
