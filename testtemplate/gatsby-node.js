const admin = require('firebase-admin');

// Local only, get from project owner
const serviceAccount = require('./firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fancymenu-f86d3.firebaseio.com',
});

const db = admin.firestore();

exports.createPages = async ({ actions: { createPage } }) => {
  /* TODO menu ID */
  const menuSnap = await db
  .collection('businesses')
  .doc('313LKQJEE2qYylSiuqO5')
  .collection('menus')
  .doc('gySYUsmEVrctBuGrLA09')
  .get();

  const menu = menuSnap.exists ? menuSnap.data() : null;

  console.log(menu);

  createPage({
    path: '/',
    component: require.resolve('./src/templates/main.js'),
    context: { menu }
  });
}