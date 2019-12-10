import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../core/Title'
import MathJax from 'react-mathjax'
import Button from '../core/Button'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'


function TheoryPage({ subject, text, assignments, headerImage }) {
  const tex = `f(x) = x^2`
  return (
    <Layout>
      <Title>{subject}</Title>
      <HeaderImage src={headerImage} alt={subject} ></HeaderImage>
      <MathJax.Provider>
        <TheoryText>
          <h2>Andragradsfunktioner</h2>
          <p>Andragradsfunktioner allas även för grad 2 polynomer. Exempel: </p>
          <MathJax.Node formula={tex} />
        </TheoryText>
        <StyledButton backgroundColor = "red" icon ="accessible_forward"></StyledButton>
      </MathJax.Provider>
    </Layout>
  )
}

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    
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

const StyledButton = styled(Button)`
  text-align: center;
  width: 10px;
`;

TheoryPage.propTypes = {
  subject: PropTypes.string,
  text: PropTypes.string,
  assignments: PropTypes.string,
  headerImage: PropTypes.string
}

export default TheoryPage

