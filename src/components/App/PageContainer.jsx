import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TheoryPage from '../TheoryPage/TheoryPage';


function PageContainer(props) {
  return (
    <Layout>
    <TheoryPage>

    </TheoryPage>
    </Layout>
  )
}

PageContainer.propTypes = {
  
}

const Layout = styled.div`
  height: calc(100vh - 5rem);
  background: #fafafa;
`;

export default PageContainer

