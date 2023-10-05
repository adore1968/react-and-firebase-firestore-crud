import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRPMIg6FSYNCJfCelZjo0ziPzwk_Wftpw",
  authDomain: "react-fb-crud-23fda.firebaseapp.com",
  projectId: "react-fb-crud-23fda",
  storageBucket: "react-fb-crud-23fda.appspot.com",
  messagingSenderId: "153111651210",
  appId: "1:153111651210:web:e79b447be3104c35a2de73",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
