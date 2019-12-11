import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../core/Button';
import Title from '../core/Title';
import TextBox from '../core//TextBox'

function TheoryPageEditor(props) {
    return (
        <Layout>
            <Title>Ändra Titel</Title>
           <TextBox></TextBox>
           <Title>Ändra text</Title>
           <TextBox></TextBox>
            <Title>Ändra huvudbild, bildlänk</Title>
           <TextBox></TextBox>
           <Title>Ändra Maxpoäng</Title>
           <TextBox></TextBox>
           <Title>Ändra sökväg</Title>
           <TextBox></TextBox>
           <Title>Ändra databasnamn</Title>
           <TextBox></TextBox>
           <Button icon="save" backgroundColor="#43b950" backgroundColorAfter="#3aaa47"></Button>
        </Layout>
    )
}
const Layout = styled.div`
 display:flex;
 flex-direction: column;
`

//maxpoints name, path headerImageurl databasename


const TitleTextBox = styled(TextBox)`
 width: calc(100vw-6rem);
 height: 2rem;
align-content: center; 
margin: 1rem 3rem;
`;

TheoryPageEditor.propTypes = {

}

export default TheoryPageEditor

