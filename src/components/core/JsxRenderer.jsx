import React from 'react'
import PropTypes from 'prop-types'
import JsxParser from 'react-jsx-parser';
import MathJax from 'react-mathjax';
import styled from 'styled-components';

function JsxRenderer({ code }) {
  return (
    <MathJax.Provider>
      <StyledText>
        <JsxParser
          components={{ MathJax }}
          jsx={code}
        />
      </StyledText>
    </MathJax.Provider>
  )
}

JsxRenderer.propTypes = {
  code: PropTypes.string,
}

const StyledText = styled.div`
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

export default JsxRenderer

