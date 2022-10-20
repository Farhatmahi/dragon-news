// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT3XLapVNmj1yu3sn2ui0McdWD0uh-1Ok",
  authDomain: "dragon-news-web.firebaseapp.com",
  projectId: "dragon-news-web",
  storageBucket: "dragon-news-web.appspot.com",
  messagingSenderId: "412423794802",
  appId: "1:412423794802:web:ec0611ebeda10a67cd52eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;