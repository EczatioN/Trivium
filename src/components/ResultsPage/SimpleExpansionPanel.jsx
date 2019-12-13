import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import JsxRenderer from '../core/JsxRenderer';
import MaterialIcon from '@material/react-material-icon';


function SimpleExpansionPanel({ assignment, userAnswers, id }) {

  const answer = userAnswers.data().assignments[
    id
  ];
  const correct = answer === assignment.answer;

  console.log(answer)
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Container>
            <StyledMaterialIcon icon={correct ? "check" : "close"} correct={correct ? correct.toString() : ""} />
            <JsxRenderer code={assignment.question}></JsxRenderer>
          </Container>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Details>
            <JsxRenderer code={assignment.question}></JsxRenderer>
            <StyledText>Du svarade: {answer}</StyledText>
            <StyledText>Rätt svar: {assignment.answer}</StyledText>
            {!correct &&
              <StyledText>{assignment.solution}</StyledText>
            }
          </Details>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}

SimpleExpansionPanel.propTypes = {

}

const StyledText = styled.p`
  font-size: 1rem;
  word-wrap: break-word !important;
  overflow: hidden;

`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledMaterialIcon = styled(MaterialIcon)`
  color: ${props => props.correct ? "green" : "red"};
`;

export default SimpleExpansionPanel;
