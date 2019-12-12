import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';

import TextInput from '../core/TextInput';
import Title from '../core/Title';
import LoadingCircle from '../core/LoadingCircle';
import JsxRenderer from '../core/JsxRenderer';

function Assignment({ area, id }) {
  const firebase = useContext(FirebaseContext);
  const userAnswersRef = firebase.db.doc(`excercises/${area}/user-answers/${firebase.auth.currentUser.uid}`);

  const [answers, answersLoading, answersError] = useDocumentData(userAnswersRef);
  const [assignment, loading, error] = useDocumentData(
    firebase.db.doc(`excercises/${area}/assignments/${id}`)
  );

  const [newAnswer, setNewAnswer] = useState("");

  const currentAnswer = answers?.assignments ? (answers?.assignments[id] ? answers?.assignments[id] : "") : "";

  useEffect(() => {

    function pushChanges() {
      if (newAnswer && answers) {
        // If the new answer is not the same as the already stored answer.
        if (newAnswer !== currentAnswer) {

          // Clone existing answers and modify them to add the new answer.
          var clonedAssignmentAnswers = answers.assignments ? [...answers.assignments] : [];
          clonedAssignmentAnswers[id] = newAnswer;

          // Update database.
          userAnswersRef.update({
            assignments: clonedAssignmentAnswers
          });
          // Clear NewAnswer, since it has been passed on to the database.
          setNewAnswer("");
        }
      }
    }
    // Call pushChanges every 500ms.
    const watcher = setInterval(pushChanges, 500);

    // Cleanup.
    return () => {
      clearInterval(watcher);
    };
  }, [newAnswer, answers, id, userAnswersRef, currentAnswer])

  return (
    <React.Fragment>
      {error &&
        `Error: ${error}`
      }
      {loading &&
        <StyledLoadingCircle />
      }
      {assignment &&
        <Layout>
          <Title>{`Uppgift ${id + 1}`}</Title>
          <JsxRenderer
            code={assignment.question}
          />
          {answersError &&
            `Error: ${answersError}`
          }
          {answersLoading &&
            <LoadingCircle />
          }
          {(!answersLoading && !answersError) &&
            <TextInput
              defaultText={currentAnswer}
              onChange={setNewAnswer}
            />
          }
        </Layout>
      }
    </React.Fragment>
  )
}

Assignment.propTypes = {
  area: PropTypes.string,
  id: PropTypes.number,
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLoadingCircle = styled(LoadingCircle)`
  margin: 10rem 0;
`;
const Text = styled.p`
  margin: 1rem;
  margin-bottom: 0;
`;

export default withRouter(Assignment)

