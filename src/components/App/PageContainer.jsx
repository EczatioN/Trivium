import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TheoryPage from '../TheoryPage/TheoryPage';
import multiplicationImage from '../../media/multiplication.jpg'


function PageContainer(props) {
  return (
    <Layout>
    <TheoryPage headerImage = {multiplicationImage} subject="Multiplikation">

    </TheoryPage>
    </Layout>
  )
}

PageContainer.propTypes = {
  
}

const Layout = styled.div`
  height: calc(100vh - 5rem);
  background: #fafafa;
  overflow:scroll;
`;

export default PageContainer

