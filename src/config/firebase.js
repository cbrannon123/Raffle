import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = require('../config');

const settings = { timestampsInSnapshots: true };

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

firebase.firestore().settings(settings);

export default firebase;
