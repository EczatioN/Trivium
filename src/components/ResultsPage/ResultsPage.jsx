import React from 'react';
import styled from 'styled-components';

import Title from '../core/Title';
import Card from '../core/Card';
import SimpleExpansionPanel from './SimpleExpansionPanel';

function ResultsPage(props) {
  const results = [
    {
      id: 0,
      question: 'Har du penis?',
      answer: 'No',
      solution: 'Kolla',
    },
    {
      id: 1,
      question: '',
      answer: '',
      solution: '',
    }
  ];

  return (
    <React.Fragment>
      <Layout>
        <Title>Resultat</Title>

        <InfoCard>
          <Procent><strong>90%</strong></Procent>
          <Resultat>9/10</Resultat>
        </InfoCard>

        <UppgiftLista>
          {results.map(result => (
            <UppgiftListaItem key={result.id}>
              <SimpleExpansionPanel
                result={result}
              />
            </UppgiftListaItem>
          ))}
        </UppgiftLista>
      </Layout>
    </React.Fragment>
  )
}

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  font-family: Nunito;
`;
const InfoCard = styled(Card)`
  color: #02c436;
  margin: 0rem 1rem 1rem 1rem;
  border-radius: 0.3rem;
  height: fit-content;
`
const Resultat = styled.p`
  text-align:center;
  margin:0.5rem;
`;
const Procent = styled.p`
  text-align:center;
  color:#02c436;
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

export default ResultsPage;

