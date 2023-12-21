import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPVUp3K96uDTqK2Gz8KHfgpCR_IwhXx_8",
  authDomain: "squareup-18c00.firebaseapp.com",
  databaseURL: "https://squareup-18c00-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "squareup-18c00",
  storageBucket: "squareup-18c00.appspot.com",
  messagingSenderId: "681787456969",
  appId: "1:681787456969:web:6b76e12f2e922361ce3c18",
};
const firebase = initializeApp(firebaseConfig);
export default firebase;
