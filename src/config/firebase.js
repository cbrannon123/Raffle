import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = require('../config');

const fbConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};
firebase.initializeApp(fbConfig);


export default firebase;
