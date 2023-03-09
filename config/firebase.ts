import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyDGRfwKI7MyzWWvBnzbrJ89GGZLIb05_4c",
  authDomain: "drivingtheorytest-43736.firebaseapp.com",
  projectId: "drivingtheorytest-43736",
  storageBucket: "drivingtheorytest-43736.appspot.com",
  messagingSenderId: "654464722617",
  appId: "1:654464722617:web:509d8c98bafa6133171d68",
  measurementId: "G-Z5PZZBN79B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
