import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FirebaseContext } from '../Firebase';
import { withRouter } from 'react-router-dom';
import Title from '../core/Title';

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
              if (answerData) {
                for (var i = 0; i < answerData.length; i++) {
                  if (answerData[i] === assignmentList[i].answer) {
                    if (userScores[userId]) {
                      userScores[userId]++;
                    } else {
                      userScores[`${userId}`] = 1;
                    }
                  }
                }
              }
            })
            console.log("scores", userScores);
            for (var user in userScores) {
              const doc = await firebase.db.doc(`users/${user}`).get();
              console.log(doc);
              console.log(Object.getOwnPropertyDescriptor(userScores, user));
              if (doc) {
                if (doc.data()) {
                  if (Object.getOwnPropertyDescriptor(userScores, user)) {
                    Object.defineProperty(
                      userScores,
                      doc.data().name,
                      Object.getOwnPropertyDescriptor(userScores, user)
                    );
                    delete userScores[user];
                  }
                }
              }
            }
            console.log(userScores);
            function compare(a, b) {
              if (a[1] > b[1]) {
                return -1;
              }
              if (a[1] < b[1]) {
                return 1;
              }
              return 0;
            }

            var sortable = [];
            for (var a in userScores) {
              sortable.push([a, userScores[a]]);
            }
            sortable.sort(compare);
            console.log(sortable);
            setTopUsers(sortable);
          });
        })
      });
    });
  }, [firebase])

  return (
    <React.Fragment>
      <Title>Scoreboard</Title>
      <ol>
        {topUsers &&
          topUsers.map(user => (
            <li key={user[0]}>{user[0]}: {user[1]}</li>
          ))
        }
      </ol>
    </React.Fragment>
  )
}

ScoreboardPage.propTypes = {

}

export default withRouter(ScoreboardPage)

