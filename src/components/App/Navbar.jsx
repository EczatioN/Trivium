import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import NavButton from './NavButton';
import homeIcon from '../../media/home-24px.svg';
import scoreboardIcon from '../../media/view_list-24px.svg';
import accountIcon from '../../media/person-24px.svg';

function Navbar(props) {
  return (
    <StyledNav>
    <NavButton>
      <StyledImg src={scoreboardIcon} alt="Scoreboard-ikon" />
    </NavButton>
      <NavButton>
        <StyledImg src={homeIcon} alt="Hem-ikon" />
      </NavButton>
      <NavButton>
        <StyledImg src={accountIcon} alt="Konto-ikon" />
      </NavButton>
    </StyledNav>
  )
}

Navbar.propTypes = {

}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 5rem;
`;

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export default Navbar

