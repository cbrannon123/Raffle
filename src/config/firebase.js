import firebase from 'firebase/app';
import 'firebase/firestore';

const config = require('../config');

var firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId,
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export { firebaseConfig as firebase };
