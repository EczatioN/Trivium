import React, { useContext } from 'react';
import styled from 'styled-components';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';

import logo from '../../media/TriviumLogo.png';
import { FirebaseContext } from '../Firebase';
import Title from '../core/Title';

function SignInPage(props) {
  const firebaseContext = useContext(FirebaseContext);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google as auth provider.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  return (
    <Layout>
      <Logo src={logo} />
      <Title>Trivium</Title>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseContext.auth}
      />
    </Layout>
  )
}

SignInPage.propTypes = {

}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  margin-top: 20vh;
`;

export default SignInPage

