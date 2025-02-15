import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbp4k7Ju30dvsE6ynrdmr5m5ZRQpOYjDA",
  authDomain: "fitzz-df206.firebaseapp.com",
  projectId: "fitzz-df206",
  storageBucket: "fitzz-df206.firebasestorage.app",
  messagingSenderId: "693050887727",
  appId: "1:693050887727:web:fb08686b0c71f6e8ef40da",
  measurementId: "G-DK5RG5PG8X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;