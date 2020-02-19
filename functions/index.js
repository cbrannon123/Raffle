const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

admin.auth().setCustomUserClaims('YPoG5XEs0pe09mYv9shTysuEeGu2', {admin: true}).then(() => {
  // The new custom claims will propagate to the user's ID token the
  // next time a new one is issued.
});

exports.isAdmin = functions.https.onRequest((req, res) => {
  res.send(firebase.auth().currentUser.getIdTokenResult()
    .then((idTokenResult) => (
      idTokenResult.claims.admin == true 
       
       
        
    ))
)})
