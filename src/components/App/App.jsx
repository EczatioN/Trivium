import React from 'react';
import styled from 'styled-components';
//import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';

import PageContainer from './PageContainer';
import Navbar from './Navbar';

function App() {
  //console.log(firebase);
  //const [user, loading, error] = useAuthState(window.firebase.auth.Auth);
  return (
    <StyledRouter>
      {true &&
        <React.Fragment>
          <PageContainer />
          <Navbar />
        </React.Fragment>
      }
    </StyledRouter>
  );
}

const StyledRouter = styled(Router)`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
`;

export default App;
