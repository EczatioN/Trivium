import React, { useContext } from 'react'
import styled from 'styled-components';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { withRouter } from 'react-router-dom';

import Title from './core/Title';
import Button from './core/Button';
import { FirebaseContext } from './Firebase'
import LoadingCircle from './core/LoadingCircle';
import JsxRenderer from './core/JsxRenderer';

function TheoryPage({ match, history }) {
  const firebase = useContext(FirebaseContext);
  const [excercise, loading, error] = useDocumentData(
    firebase.db.doc(`excercises/${match.params.area}`)
  );

  function navigateToExcercises() {
    history.push(`/omraden/${match.params.area}/uppgifter/0`);
  }

  return (
    <React.Fragment>
      {error &&
        `Error: ${error}`
      }
      {loading &&
        <LoadingCircle />
      }
      {excercise &&
        <Layout>
          <Title>{excercise.name}</Title>
          <HeaderImage src={excercise.headerImageUrl} alt={excercise.name} ></HeaderImage>
          <JsxRenderer code={excercise.theory} />
          <TheoryButton //Properties: backgroundColor, backgroundColorAfter icon, text
            backgroundColor="#43b950"
            backgroundColorAfter="#3aaa47"
            icon="play_arrow"
            text="Gör Uppgifter"
            onClick={navigateToExcercises}
          />
        </Layout>
      }
    </React.Fragment>
  )
}

TheoryPage.propTypes = {

}

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    
`;

const TheoryButton = styled(Button)`
`;

const HeaderImage = styled.img`
    width: calc(100vw-2rem);
    height: 10rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
`;

export default withRouter(TheoryPage)

