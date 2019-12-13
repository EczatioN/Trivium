import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FirebaseContext } from '../Firebase';
import { withRouter } from 'react-router-dom';

function ScoreboardPage({ history, match }) {
  const firebase = useContext(FirebaseContext);

  const [topUsers, setTopUsers] = useState();

  useEffect(() => {

    var userScores = {};

    firebase.db.collection(`excercises`).get().then(collection => {
      collection.forEach(doc => {
        const excercise = doc.data();
        const excerciseId = doc.id;

        firebase.db.collection(`excercises/${excerciseId}/user-answers`).get().then(userAnswers => {
          firebase.db.collection(`excercises/${excerciseId}/assignments`).get().then(async assignments => {
            var assignmentList = [];
            assignments.forEach(assignment => {
              assignmentList.push(assignment.data());
            });

            userAnswers.forEach(answers => {
              const userId = answers.id;
              const answerData = answers.data().assignments;
              console.log(userId, answerData);
              for (var i = 0; i < answerData.length; i++) {
                if (answerData[i] === assignmentList[i].answer) {
                  if (userScores[userId]) {
                    userScores[userId]++;
                  } else {
                    userScores[`${userId}`] = 1;
                  }
                }
              }
            })
            console.log("scores", userScores);
            for (var user in userScores) {
              const doc = await firebase.db.doc(`users/${user}`).get();
              console.log(doc);
              Object.defineProperty(userScores, doc.data().name,
                Object.getOwnPropertyDescriptor(userScores, user));
              delete userScores[user];
            }
            console.log(userScores);
            setTopUsers(userScores);
          });
        })
      });
    });
  }, [firebase])

  return (
    <ol>
      {topUsers &&
        topUsers.map(user => (
          <li>{user}</li>
        ))
      }
    </ol>
  )
}

ScoreboardPage.propTypes = {

}

export default withRouter(ScoreboardPage)

