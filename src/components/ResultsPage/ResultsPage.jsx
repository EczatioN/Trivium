import React, { useContext } from 'react'
import styled from 'styled-components';
import { FirebaseContext } from '../Firebase';
import Title from '../core/Title';
import Card from '../core/Card';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import { withRouter } from 'react-router-dom';
import { useCollectionOnce, useDocumentOnce } from 'react-firebase-hooks/firestore';
import LoadingCircle from '../core/LoadingCircle';
import Button from '../core/Button';

function ResultsPage({ match, history }) {
  const firebase = useContext(FirebaseContext);
  const [assignments, loading, error] = useCollectionOnce(
    firebase.db.collection(`excercises/${match.params.area}/assignments`)
  );
  const [userAnswers, answersLoading, answersError] = useDocumentOnce(
    firebase.db.doc(`excercises/${match.params.area}/user-answers/${firebase.auth.currentUser.uid}`)
  );
  var correctAnswers = 0;

  if (assignments && userAnswers) {
    assignments.docs.forEach(assignment => {

      const answer = userAnswers.data().assignments[
        assignment.id
      ];
      console.log(answer, assignment.data().answer)
      if (assignment.data()) {
        if (answer === assignment.data().answer) {
          correctAnswers++;
        };
      }
    });

    firebase.db.doc(`excercises/${match.params.area}/user-answers/${firebase.auth.currentUser.uid}`).set({
      correctAnswers: correctAnswers
    }, { merge: true });
  }

  function goHome() {
    history.replace(`/hem`);
  }
  function retry() {
    firebase.db.doc(`excercises/${match.params.area}/user-answers/${firebase.auth.currentUser.uid}`).delete()
      .then(() => {
        history.replace(`/omraden/${match.params.area}`);
      });
  }

  return (
    <React.Fragment>
      {error &&
        `Error: ${error}`
      }
      {answersError &&
        `Error: ${answersError}`
      }
      {(loading || answersLoading) &&
        <LoadingCircle />
      }
      {assignments && userAnswers &&
        <Layout>
          <Title>Resultat</Title>

          <InfoCard>
            <Procent red={(correctAnswers / assignments.docs.length) * 100 <= 50} ><strong>{Math.round((correctAnswers / assignments.docs.length) * 100)}%</strong></Procent>
            <Resultat>{correctAnswers}/{assignments.docs.length}</Resultat>
          </InfoCard>

          <ButtonContainer>
            <Button
              onClick={retry}
              iconColor="black"
              icon="replay"
              text="Försök igen"
              backgroundColor="lightgreen"
            />
            <Button
              onClick={goHome}
              iconColor="black"
              icon="home"
              text="Gå hem"
              backgroundColor="lightblue"
            />
          </ButtonContainer>

          <UppgiftLista>
            {assignments.docs.map(assignment => (
              <UppgiftListaItem key={assignment.id}>
                <SimpleExpansionPanel
                  assignment={assignment.data()}
                  userAnswers={userAnswers}
                  id={assignment.id}
                />
              </UppgiftListaItem>
            ))}
          </UppgiftLista>
        </Layout>
      }
    </React.Fragment>
  )
}

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  font-family: Nunito;
`;
const ButtonContainer = styled.div`
  display:flex;
  flex-direction: row;
`;
const InfoCard = styled(Card)`

  margin: 0rem 1rem 1rem 1rem;
  border-radius: 0.3rem;
  height: fit-content;
`;
const Resultat = styled.p`
  text-align:center;
  margin:0.5rem;
`;
const Procent = styled.p`
  text-align:center;
  color: ${props => props.red ? "#ed1509" : "#02c436"};
  margin:0.5rem;
  font-size:2rem;
`;
const UppgiftLista = styled.ol`
  margin:1rem 1rem 1rem 0rem;
  font-size: 2rem;
    
`;
const UppgiftListaItem = styled.li`
  display:fit-content;
  margin:1rem;
  border-style:solid;
  border-width:0.1rem;
  border-color:rgba(212, 212, 212, 0.65);
  border-radius:0.3rem;
  background-color:#ffffff;
`;

ResultsPage.propTypes = {

}

export default withRouter(ResultsPage);

