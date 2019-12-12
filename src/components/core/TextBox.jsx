import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TextBox({defaultText}) {
    const [textContent,setTextContent] = useState(defaultText);
    function onTextChange(event) {
        setTextContent(event.target.value);
    }
    return (
        <Layout>
             <StyledTextArea value={textContent} onChange={onTextChange}>
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
    defaultText: PropTypes.string,
}

export default TextBox

