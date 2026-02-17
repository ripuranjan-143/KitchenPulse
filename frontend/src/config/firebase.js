import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'kitchenpulse-a04a9.firebaseapp.com',
  projectId: 'kitchenpulse-a04a9',
  storageBucket: 'kitchenpulse-a04a9.firebasestorage.app',
  messagingSenderId: '972219198496',
  appId: '1:972219198496:web:e63695baebf4f754fb6045',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
