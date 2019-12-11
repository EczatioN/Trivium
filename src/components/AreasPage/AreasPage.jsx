import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

import Title from '../core/Title';
import { FirebaseContext } from '../Firebase';
import LoadingCircle from '../core/LoadingCircle';
import Area from './Area';

function AreasPage(props) {
  const firebase = useContext(FirebaseContext);
  const [value, loading, error] = useCollectionOnce(
    firebase.db.collection("excercises")
  );

  return (
    <Layout>
      <Title>Områden</Title>
      {error &&
        `Error: ${error}`
      }
      {loading &&
        <LoadingCircle />
      }
      {value &&
        <AreasList>
          {value.docs.map(doc => (
            <Area
              key={doc.id}
              docName={doc.id}
              data={doc.data()}
            />
          ))}
        </AreasList>
      }
    </Layout>
  )
}

AreasPage.propTypes = {

}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const AreasList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0 1rem;
  list-style: none;
`;

export default AreasPage

