import React, { useState } from 'react';
import styled from 'styled-components';

function TextInput(props) {

  const [text, setText] = useState();

  function updateText(event) {
    setText(event.target.value);
  }

  return (
    <StyledInput
      value={text}
      onChange={updateText}
      type="text"
    >

    </StyledInput>
  )
}

TextInput.propTypes = {

}

const StyledInput = styled.input`
  font-size: 2.5rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-width: 0.05125rem;
  border-style: solid;
  border-color: gray;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

export default TextInput

