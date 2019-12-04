import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQO5dOL_wGG8TaXuLmfPJKtjwt9IMUk3Y",
  authDomain: "fancymenu-f86d3.firebaseapp.com",
  databaseURL: "https://fancymenu-f86d3.firebaseio.com",
  projectId: "fancymenu-f86d3",
  storageBucket: "fancymenu-f86d3.appspot.com",
  messagingSenderId: "882163445390",
  appId: "1:882163445390:web:ed7ce025467302425623df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();