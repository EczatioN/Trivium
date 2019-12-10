import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';
import Navbar from './Navbar';

function App() {
  return (
    <Layout>
      <PageContainer />
      <Navbar />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
