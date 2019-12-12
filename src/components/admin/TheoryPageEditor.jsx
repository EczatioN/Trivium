import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../core/Button';
import Title from '../core/Title';
import TextBox from '../core//TextBox'
import { FirebaseContext } from '../Firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore/';
import LoadingCircle from '../core/LoadingCircle';

function TheoryPageEditor({ match }) {
    const firebase = useContext(FirebaseContext)
    const [excercise, loading, error] = useDocumentData(
        firebase.db.doc(`excercises/${match.params.area}`)
    );
    return (
        <React.Fragment>
            {error &&
                `Error: ${error}`
            }
            {
                loading &&
                <LoadingCircle />
            }
            {
                excercise &&
                <Layout>
                    <Title>Ändra Titel</Title>
                    <TextBox defaultText= {excercise.name}/>
                    <Title>Teoritext</Title>
                    <TextBox defaultText= {excercise.theory}/>
                    <Title>Ändra huvudbild, bildlänk</Title>
                    <TextBox defaultText= {excercise.headerImageUrl}/>
                    <Title>Ändra Maxpoäng</Title>
                    <TextBox defaultText= {excercise.maxPoints}/>
                    <Title>Ändra databasnamn</Title>
                    <TextBox defaultText= {excercise.id}/>
                    <Button icon="save" backgroundColor="#43b950" backgroundColorAfter="#3aaa47"></Button>
                </Layout>
            }
        </React.Fragment>
    )
}
const Layout = styled.div`
 display:flex;
 flex-direction: column;
`

//maxpoints name, path headerImageurl databasename


TheoryPageEditor.propTypes = {

}

export default TheoryPageEditor

