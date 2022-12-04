// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOchxXniRtj0MOO3VMq_oHbj8N-KDZQmE",
  authDomain: "verify-3613f.firebaseapp.com",
  projectId: "verify-3613f",
  storageBucket: "verify-3613f.appspot.com",
  messagingSenderId: "458913632493",
  appId: "1:458913632493:web:89a16e67b2a830bff87ce4",
  measurementId: "G-C8H59Z1PMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;