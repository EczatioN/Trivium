import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

function NavButton({ children }) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

NavButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

const StyledButton = styled.button`
  flex-grow: 1;
  background: #004A97;
  border: none;
`;

export default NavButton

