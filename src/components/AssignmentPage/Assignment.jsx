import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../Firebase';

import TextInput from '../core/TextInput';
import Title from '../core/Title';
import LoadingCircle from '../core/LoadingCircle';

function Assignment({ area, id }) {
  const firebase = useContext(FirebaseContext);
  const [assignment, loading, error] = useDocumentDataOnce(
    firebase.db.doc(`excercises/${area}/assignments/${id}`)
  );
  return (
    <React.Fragment>
      {error &&
        `Error: ${error}`
      }
      {loading &&
        <StyledLoadingCircle />
      }
      {assignment &&
        <Layout>
          <Title>{`Uppgift ${id + 1}`}</Title>
          <Text>{assignment.question}</Text>
          <TextInput />
        </Layout>
      }
    </React.Fragment>
  )
}

Assignment.propTypes = {
  area: PropTypes.string,
  id: PropTypes.number,
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLoadingCircle = styled(LoadingCircle)`
  margin: 10rem 0;
`;

const Text = styled.p`
  margin: 1rem;
  margin-bottom: 0;
`;

export default withRouter(Assignment)

