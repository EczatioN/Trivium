import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import TheoryPage from '../TheoryPage';
import TheoryPageEditor from '../admin/TheoryPageEditor'
import multiplicationImage from '../../media/multiplication.jpg'
import AreasPage from '../AreasPage/AreasPage';

function PageContainer(props) {
  return (
    <Layout>
      <Route
        exact path="/"
        render={(props) => <Redirect {...props} to={ROUTES.HOME} />}
      />
      <Route
        path={ROUTES.SCOREBOARD}
        render={(props) => "Scoreboard"}
      />
      <Route
        path={ROUTES.HOME}
        render={(props) => <AreasPage {...props} />}
      />
      <Route
        path={ROUTES.ACCOUNT}
        render={(props) =>"konto"}
      />
      <Route
        path={ROUTES.AREAS}
        render={(props) => <TheoryPage {...props} headerImage={multiplicationImage} subject="Multiplikation" />}
      />
      <Route
        path={ROUTES.ADMIN_AREAS}
        render={(props) => <TheoryPageEditor {...props}/>}
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

