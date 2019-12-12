import React from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Assignment from './Assignment';
import Button from '../core/Button';

function AssignmentPage({ match, history }) {
  const area = match.params.area;
  const assignmentId = parseInt(match.params.id);


  function navigateBack() {
    history.replace(`/omraden/${area}/uppgifter/${assignmentId - 1}`);
  }
  function navigateForward() {
    history.replace(`/omraden/${area}/uppgifter/${assignmentId + 1}`);
  }

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

