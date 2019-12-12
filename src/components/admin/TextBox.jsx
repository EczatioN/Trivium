import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function TextBox({ onChange, defaultValue }) {
    const [text, setText] = useState(defaultValue);
    function onTextChange(event) {
        onChange(event.target.value);
        setText(event.target.value);
    }
    return (
        <Layout>
            <StyledTextArea value={text} onChange={onTextChange}>
            </StyledTextArea>
        </Layout>
    )

}

const Layout = styled.div`
display:flex;
flex-direction:column;
`;
const StyledTextArea = styled.textarea`
idth: calc(100vw-6rem);
 height: 10rem;
 
margin: 1rem 3rem;
`;
TextBox.propTypes = {
    onChange: PropTypes.func,
    defaultValue: PropTypes.any,
}

export default TextBox

