import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

function Card({ children }) {
  return (
    <StyledDiv>

    </StyledDiv>
  )
}

Card.propTypes = {

}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1rem;

  -webkit-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
  box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
`;

export default Card

