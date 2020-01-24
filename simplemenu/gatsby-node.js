const firebase = require('firebase/app');
require('firebase/firestore');
const idObject = require('../id_data.json');

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

const db = firebase.firestore();

exports.createPages = async ({ actions: { createPage } }) => {
  /* TODO menu ID */
  const menuSnap = await db
  .collection('businesses')
  .doc(idObject.business)
  .collection('menus')
  .doc(idObject.menu)
  .get();

  const menu = menuSnap.exists ? menuSnap.data() : null;

  createPage({
    path: '/',
    component: require.resolve('./src/templates/main.js'),
    context: { menu }
  });
}