import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import PageContainer from './PageContainer';
import Navbar from './Navbar';
import { FirebaseContext } from '../Firebase';
import SignInPage from '../SignInPage/SignInPage';
import LoadingCircle from '../core/LoadingCircle';

function App() {
  const firebase = useContext(FirebaseContext);
  const [user, loading, error] = useAuthState(firebase.auth);

  if (user) {
    firebase.db.collection("users").doc(user.uid).set({
      email: user.email
    });
  }

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

const Layout = styled(Div100vh)`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
`;

export default App;
