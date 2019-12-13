import React , {useContext} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Title from './core/Title';
import Card from './core/Card';
import Button from './core/Button'
import Picture from './core/Picture'

import { FirebaseContext } from './Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

function ProfilePage(props) {
    const firebase = useContext(FirebaseContext);
    const CurrentUser = () => {}
    const [user, initialising, error] = useAuthState(firebase.auth);
    const Email = firebase.auth.currentUser.email
    const Name = firebase.auth.currentUser.displayName
    var ProfilePicture = firebase.auth.currentUser.photoURL
    const logout = () => {
        firebase.auth.signOut();
      };
    return (
        <React.Fragment>

            <PageTitle>Konto</PageTitle>
            {initialising && 
                    <div>
                      <p>Initialising User...</p>
                    </div>
            }
            {error &&
                `Error: ${error}`
            }
            {user &&
                    <ProfileCard>
                        <UserPicture src={ProfilePicture} alt="ProfilePicture"/>
                        <Username> {Name} </Username>
                        <UserMail>{Email}</UserMail>
                        <LogoutButton onClick={logout} text="Log out"></LogoutButton>
                    </ProfileCard>
            }



        
        
        
        
        </React.Fragment>
    )

}

const PageTitle = styled(Title)`
    
`;

const UserPicture = styled.img`
    margin: auto;
    border-radius: 10rem;
    width: 10rem;
    height: 10rem;
    
`;

const Username = styled.p`
    font-size:auto;
    word-wrap: break-word !important;
    overflow: hidden;text-align: center
    text-align: center
`;
const UserMail = styled.p`
    font-size:auto;
    word-wrap: break-word !important;
    overflow: hidden;
    text-align: center
`;
const LogoutButton = styled(Button)`
    color:#ffffff;
    background-color:#d62400;
    padding-left:2rem;
    padding-right:2rem;
    text-align:center;
`;

const ProfileCard = styled(Card)`
  display:flex;
  margin: 0rem 1rem 1rem 1rem;
  border-radius: 0.3rem;
  height: 70vh;
`;


ProfilePage.propTypes = {

}

export default ProfilePage

