import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MathJax from 'react-mathjax';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import JsxParser from 'react-jsx-parser';

import Title from '../core/Title';
import Button from '../core/Button';
import { FirebaseContext } from '../Firebase';
import LoadingCircle from '../core/LoadingCircle';

function TheoryPage({ match }) {
  const firebase = useContext(FirebaseContext);
  const [excercise, loading, error] = useDocumentDataOnce(
    firebase.db.doc(`excercises/${match.params.area}`)
  );
  if (excercise) {
    console.log(excercise.theory);
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
          <MathJax.Provider>
            <TheoryText>
              <JsxParser
                jsx={excercise.theory}
              />
            </TheoryText>
            <TheoryButton //Properties: backgroundColor, backgroundColorAfter icon, text
              backgroundColor="#43b950"
              backgroundColorAfter="#3aaa47"
              icon="play_arrow"
              text="Gör Uppgifter"
            />
          </MathJax.Provider>
        </Layout>
      }
    </React.Fragment>
  )
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



const TheoryText = styled.div`
    margin: 0.5rem 1rem;
    font-size: 1.4rem;
    img {

    }
    /* använd <h2> för underrubrik*/
    h2 {
      font-size: 1.7rem;
      margin: 0.5rem 0;
      max-width:100vw;
    }

    /* använd <p> för vanlig text*/
    p {

        margin: 0;

    }
`;


TheoryPage.propTypes = {

}

export default TheoryPage

