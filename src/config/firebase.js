import firebase from 'firebase';
import 'firebase/database';

const config = require('../config');

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
});

//api and config vars
const database = firebase.database();

//functions
function createItem(ref, item) {
  return database.ref(ref).push(item);
}

export { database, createItem };