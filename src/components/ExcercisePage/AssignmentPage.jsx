import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';
import LoadingCircle from '../core/LoadingCircle';
import Assignment from './Assignment';
import Button from '../core/Button';

function AssignmentPage({ match, history }) {
  const area = match.params.area;
  const assignmentId = parseInt(match.params.id);

  const firebase = useContext(FirebaseContext);
  const [assignment, loading, error] = useDocumentDataOnce(
    firebase.db.doc(`excercises/${area}/assignments/${assignmentId}`)
  );

  function navigateBack() {
    history.replace(`/omraden/${area}/uppgifter/${assignmentId - 1}`);
  }
  function navigateForward() {
    history.replace(`/omraden/${area}/uppgifter/${assignmentId + 1}`);
  }

  return (
    <Layout>
      {error &&
        `Error: ${error}`
      }
      {loading &&
        <LoadingCircle />
      }
      {assignment &&
        <Assignment
          assignment={assignment}
          id={parseInt(assignmentId)}
          area={area}
        />
      }
      <NavContainer>
        {(assignmentId > 0) &&
          <Button
            backgroundColor="lightblue"
            iconColor="black"
            icon="keyboard_arrow_left"
            onClick={navigateBack}
          />
        }
        <Button
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
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

export default withRouter(AssignmentPage)

