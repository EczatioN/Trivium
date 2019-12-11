import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import TheoryPage from '../TheoryPage';
import TheoryPageEditor from '../admin/TheoryPageEditor'
import multiplicationImage from '../../media/multiplication.jpg'

function PageContainer(props) {
  return (
    <Layout>
      <Route
        path={ROUTES.SCOREBOARD}
        render={(props) => "Scoreboard"}
      />
      <Route
        path={ROUTES.HOME}
        render={(props) => <TheoryPage {...props} headerImage={multiplicationImage} subject="Multiplikation" />}
      />
      <Route
        path={ROUTES.ACCOUNT}
        render={(props) => <TheoryPageEditor/>}
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

