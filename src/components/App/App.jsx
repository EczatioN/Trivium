import React from 'react';
//import styled from 'styled-components';
//import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';

import PageContainer from './PageContainer';
import Navbar from './Navbar';

function App() {
  //console.log(firebase);
  //const [user, loading, error] = useAuthState(window.firebase.auth.Auth);
  return (
    <Router>
      {true &&
        <React.Fragment>
          <PageContainer />
          <Navbar />
        </React.Fragment>
      }
    </Router>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
`;

export default App;
