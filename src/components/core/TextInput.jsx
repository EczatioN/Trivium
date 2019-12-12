import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

function TextInput({ defaultText, onChange }) {
  const [text, setText] = useState(defaultText);

  function updateText(event) {
    setText(event.target.value);
    if (onChange) onChange(event.target.value);
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
  defaultText: PropTypes.string,
  onChange: PropTypes.func,
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

