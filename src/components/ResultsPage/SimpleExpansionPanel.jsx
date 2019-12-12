import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

function SimpleExpansionPanel({ result }) {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{result.question}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Details>
            <StyledText>{result.question}</StyledText>
            <StyledText>{result.answer}</StyledText>
            <StyledText>{result.solution}</StyledText>
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

export default SimpleExpansionPanel;
