import React, { useContext,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../core/Button';
import Title from '../core/Title';
import { FirebaseContext } from '../Firebase';
import LoadingCircle from '../core/LoadingCircle';
import TextBox from '../admin/TextBox';

function TheoryPageEditor({ match }) {
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        firebase.db.collection('excercises').doc(match.params.area)
        .onSnapshot(function(doc){
            const area = doc.data();
            setExcerciseName(area.name);
            setExcerciseTheory(area.theory);
            setExcerciseHeaderImageUrl(area.headerImageUrl);
            setExcerciseMaxPoints(area.maxPoints);
            setExcerciseDBname(area.id);
            console.log(area);
        });

    }, [match, firebase])
 

    const [excerciseName,setExcerciseName] = useState();
    const [excerciseTheory,setExcerciseTheory] = useState();
    const [excerciseHeaderImageUrl,setExcerciseHeaderImageUrl] = useState();
    const [excerciseMaxPoints,setExcerciseMaxPoints] = useState();
    const [excerciseDBname,setExcerciseDBname] = useState();

    const [newName,setNewName] = useState();
    const [newTheory,setNewTheory] = useState();
    const [newHeaderImageUrl,setNewHeaderImageUrl] = useState();
    const [newMaxPoints,setNewMaxPoints] = useState();
    const [newDBname,setNewDBname] = useState();
    function updateName(text){
        setExcerciseName(text);

    }

    function saveData() {
        console.log("saving")
        firebase.db.collection("excercises").doc(match.params.area).set({
            name: {newName},
            theory: {newTheory},
            headerImageUrl: {newHeaderImageUrl},
            maxPoints:{newMaxPoints},
            id: {newDBname},

        });
    }
    
    return (
        <React.Fragment>
            {
            (excerciseDBname === false) &&
                <LoadingCircle />
            }
            {
                excerciseDBname &&
                <Layout>
                    <Title>Ändra Titel</Title>
                    <TextBox defaultValue={excerciseName} onChange={setNewName}/>
                    <Title>Teoritext</Title>
                    <TextBox defaultValue={excerciseTheory} onChange={setNewTheory}/>
                    <Title>Ändra huvudbild, bildlänk</Title>
                    <TextBox defaultValue={excerciseHeaderImageUrl} onChange={setNewHeaderImageUrl}/>
                    <Title>Ändra Maxpoäng</Title>
                    <TextBox defaultValue={excerciseMaxPoints} onChange={setNewMaxPoints} />
                    <Title>Ändra databasnamn</Title>
                    <TextBox defaultValue={excerciseDBname} onChange={setNewDBname}/>
                    <Button icon="save" backgroundColor="#43b950" backgroundColorAfter="#3aaa47" onClick={saveData}></Button>
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

