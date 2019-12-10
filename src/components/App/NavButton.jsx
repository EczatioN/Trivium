import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavButton({ children, to }) {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  )
}

NavButton.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string
}

const StyledLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  background: #004A97;
  border: none;
`;

export default NavButton

