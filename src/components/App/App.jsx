import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';

import PageContainer from './PageContainer';
import Navbar from './Navbar';
import { FirebaseContext } from '../Firebase';
import SignInPage from '../SignInPage/SignInPage';
import LoadingCircle from '../core/LoadingCircle';

function App() {
  const firebaseContext = useContext(FirebaseContext);
  const [user, loading, error] = useAuthState(firebaseContext.auth);

  return (
    <Layout>
      <Router>
        {error &&
          `Error: ${error}`
        }
        {user &&
          <React.Fragment>
            <PageContainer />
            <Navbar />
          </React.Fragment>
        }
        {loading &&
          <LoadingCircle />
        }
        {(!user && !loading) &&
          <SignInPage />
        }
      </Router>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
`;

export default App;
