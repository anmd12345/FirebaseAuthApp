import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCx2YYUwxzpKFvnNhF2Wg-D9rnedwvlx7k",
  authDomain: "test-firebase-app-bb07a.firebaseapp.com",
  projectId: "test-firebase-app-bb07a",
  storageBucket: "test-firebase-app-bb07a.appspot.com",
  messagingSenderId: "229762496022",
  appId: "1:229762496022:android:dd7e19ec4c6ccabdb32737"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
