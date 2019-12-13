const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.getScoreboard = functions.https.onRequest((req, res) => {
  functions.firestore.collection(`excercises`).get().then(collection => {
    collection.forEach(doc => {
      const excercise = doc.data();
      const excerciseId = doc.id;

      firebase.db.collection(`excercises/${excerciseId}/user-answers`).get().then(userAnswers => {
        const users = userAnswers.data();
        console.log(users);
      })
    });
  });
});