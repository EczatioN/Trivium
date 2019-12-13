import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Assignment from './Assignment';
import Button from '../core/Button';
import { FirebaseContext } from '../Firebase';

function AssignmentPage({ match, history }) {
  const firebase = useContext(FirebaseContext);
  const area = match.params.area;
  const assignmentId = parseInt(match.params.id);
  const [assignmentAmount, setAssignmentAmount] = useState(0);

  // Make sure a user-answers document exists for the current user.
  firebase.db.doc(`excercises/${area}/user-answers/${firebase.auth.currentUser.uid}`).set({}, { merge: true });

  function navigateBack() {
    history.replace(`/omraden/${area}/uppgifter/${assignmentId - 1}`);
  }
  function navigateForward() {
    // If there is no next assignment.
    if (assignmentId + 1 >= assignmentAmount) {
      history.replace(`/omraden/${area}/resultat`);
    } else {
      history.replace(`/omraden/${area}/uppgifter/${assignmentId + 1}`);
    }
  }

  useEffect(() => {
    firebase.db.collection(`excercises/${area}/assignments`).get()
      .then(snapshot => {
        setAssignmentAmount(snapshot.size);
      })
  }, [firebase, area]);

  return (
    <Layout>
      <Assignment
        id={parseInt(assignmentId)}
        area={area}
      />
      <Grower />
      <NavContainer>
        <Button
          disabled={assignmentId <= 0}
          backgroundColor="lightblue"
          iconColor="black"
          icon="keyboard_arrow_left"
          onClick={navigateBack}
        />
        <Button
          text={(assignmentId + 1 >= assignmentAmount) ? "Avsluta" : ""}
          assignmentid={assignmentId}
          backgroundColor="lightblue"
          iconColor="black"
          icon="keyboard_arrow_right"
          onClick={navigateForward}
        />
      </NavContainer>
    </Layout>
  )
}

AssignmentPage.propTypes = {

}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Grower = styled.div`
  flex-grow: 1;
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

export default withRouter(AssignmentPage)

