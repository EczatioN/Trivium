import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Title from '../core/Title';
import Button from '../core/Button';
import { withRouter } from 'react-router-dom';
import TextInput from '../core/TextInput';

function Assignment({ assignment, id }) {
  return (
    <Layout>
      <Title>{`Uppgift ${id + 1}`}</Title>
      <Text>{assignment.question}</Text>
      <TextInput />
    </Layout>
  )
}

Assignment.propTypes = {
  assignment: PropTypes.object,
  area: PropTypes.string,
  id: PropTypes.number,
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 1rem;
  margin-bottom: 0;
`;

export default withRouter(Assignment)

