// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.envREACT_APP_API_KEY,
  authDomain: process.envREACT_APP_AUTH_DOMAIN,
  projectId: process.envREACT_APP_PROJECT_ID,
  storageBucket: process.envREACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.envREACT_APP_MESSAGIN_SENDER_ID,
  appId: process.envREACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
