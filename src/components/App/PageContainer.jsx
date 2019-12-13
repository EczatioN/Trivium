import React from 'react'
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import TheoryPage from '../TheoryPage';
import TheoryPageEditor from '../admin/TheoryPageEditor'
import AreasPage from '../AreasPage/AreasPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import AssignmentEditor from '../admin/AssignmentEditor';
import AssignmentPage from '../AssignmentPage/AssignmentPage';
import NewAssignment from '../admin/NewAssignment';
import ProfilePage from '../ProfilePage';
import ScoreboardPage from '../ScoreboardPage/ScoreboardPage';

function PageContainer(props) {
  return (
    <Layout>
      <Route
        exact path="/"
        render={(props) => <Redirect {...props} to={ROUTES.HOME} />}
      />
      <Route
        path={ROUTES.SCOREBOARD}
        render={(props) => <ScoreboardPage />}
      />
      <Route
        path={ROUTES.HOME}
        render={(props) => <AreasPage {...props} />}
      />
      <Route
        path={ROUTES.ACCOUNT}
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        exact path={ROUTES.AREAS}
        render={(props) => <TheoryPage {...props} />}
      />
      <Route
        path={ROUTES.EXCERCISES}
        render={(props) => <AssignmentPage {...props} />}
      />
      <Route
        exact path={ROUTES.RESULTS}
        render={(props) => <ResultsPage {...props} />}
      />

      {/* Admin */}
      <Route
        exact path={ROUTES.ADMIN_AREAS}
        render={(props) => <TheoryPageEditor {...props} />}
      />
      <Route
        exact path={ROUTES.ADMIN_ASSIGNMENTS}
        render={(props) => <AssignmentEditor {...props} />}
      />
      <Route
        exact path={ROUTES.ADMIN_CREATE_ASSIGNMENT}
        render={(props) => <NewAssignment {...props} />}
      />
    </Layout>
  )
}

PageContainer.propTypes = {

}

const Layout = styled.div`
  height: calc(100vh - 5rem);
  background: #fafafa;
  overflow: auto;
`;

export default PageContainer

