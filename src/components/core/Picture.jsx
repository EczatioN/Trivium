import React from 'react'
import styled from 'styled-components';

function Picture({ children, className }) {
  return (
    <StyledDiv className={className}>
      {
        children
      }
    </StyledDiv>
  )
}

Picture.propTypes = {

}

const StyledDiv = styled.div`
    border-radius: 1rem;
`;

export default Picture

