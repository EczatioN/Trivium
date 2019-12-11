import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

function Area({ data, history }) {
  console.log(data);

  function navigateToTheory() {
    history.push(`omraden/${data.path}`);
  }

  return (
    <StyledListItem onClick={navigateToTheory}>
      <HeaderImage src={data.headerImageUrl} />
      <Name>{data.name}</Name>
    </StyledListItem>
  )
}

Area.propTypes = {
  data: PropTypes.object
}

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(50vw - 1rem - 1rem);
  background: white;
  border-radius: 1rem;

  -webkit-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
  box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.4);
`;

const HeaderImage = styled.img`
  height: 6rem;
  width: fill-parent;
  border-radius: 1rem 1rem 0 0;
`;

const Name = styled.h2`
  height: 4rem;
  font-size: fit-parent;
  margin: 0.5rem;
`;

export default withRouter(Area)

