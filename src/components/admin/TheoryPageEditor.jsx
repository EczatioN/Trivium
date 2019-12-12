import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../core/Button';
import Title from '../core/Title';
import { FirebaseContext } from '../Firebase';
import LoadingCircle from '../core/LoadingCircle';
import TextBox from './TextBox';
import { withRouter } from 'react-router-dom';

function TheoryPageEditor({ match, history }) {
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        firebase.db.collection('excercises').doc(match.params.area)
            .onSnapshot(function (doc) {
                const area = doc.data();
                setExcerciseName(area.name);
                setExcerciseTheory(area.theory);
                setExcerciseHeaderImageUrl(area.headerImageUrl);
                setExcerciseMaxPoints(area.maxPoints);
                setExcerciseDBname(area.id);
            });

    }, [match, firebase])
    const [assignments, setAssignments] = useState();
    useEffect(() => {
        firebase.db.collection(`excercises/${match.params.area}/assignments`)
            .onSnapshot(function (docs) {
                setAssignments(docs);
            })
    }, [match, firebase])

    const [excerciseName, setExcerciseName] = useState();
    const [excerciseTheory, setExcerciseTheory] = useState();
    const [excerciseHeaderImageUrl, setExcerciseHeaderImageUrl] = useState();
    const [excerciseMaxPoints, setExcerciseMaxPoints] = useState();
    const [excerciseDBname, setExcerciseDBname] = useState();

    const [newName, setNewName] = useState();
    const [newTheory, setNewTheory] = useState();
    const [newHeaderImageUrl, setNewHeaderImageUrl] = useState();
    const [newMaxPoints, setNewMaxPoints] = useState();
    const [newDBname, setNewDBname] = useState();


    function saveData() {
        var doc = {};
        doc.name = newName ? newName : excerciseName;
        doc.theory = newTheory ? newTheory : excerciseTheory;
        doc.headerImageUrl = newHeaderImageUrl ? newHeaderImageUrl : excerciseHeaderImageUrl;
        doc.maxPoints = newMaxPoints ? newMaxPoints : excerciseMaxPoints;
        doc.id = newDBname ? newDBname : excerciseDBname;
        firebase.db.collection("excercises").doc(match.params.area).set(doc);
    }

    function navigateToAssignment(id) {
        history.push(`${match.params.area}/uppgifter/${id}`)
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
                    <TextBox defaultValue={excerciseName} onChange={setNewName} />
                    <Title>Teoritext</Title>
                    <TextBox defaultValue={excerciseTheory} onChange={setNewTheory} />
                    <Title>Ändra huvudbild, bildlänk</Title>
                    <TextBox defaultValue={excerciseHeaderImageUrl} onChange={setNewHeaderImageUrl} />
                    <Title>Ändra Maxpoäng</Title>
                    <TextBox defaultValue={excerciseMaxPoints} onChange={setNewMaxPoints} />
                    <Title>Ändra databasnamn</Title>
                    <TextBox defaultValue={excerciseDBname} onChange={setNewDBname} />
                    <ButtonDiv>
                        <Button icon="save" backgroundColor="#43b950" backgroundColorAfter="#3aaa47" text="Spara" onClick={saveData}></Button>
                        <Button icon="add" backgroundColor="#43b950" text="Lägg till Uppgift"></Button>
                    </ButtonDiv>
                    {assignments &&
                        <StyledOl>
                            {assignments.docs.map(doc => (
                                <StyledLi onClick={() => navigateToAssignment(doc.id)}
                                    key={doc.id}>
                                    {doc.id}
                                </StyledLi>
                            ))}
                        </StyledOl>
                    }

                </Layout>
            }
        </React.Fragment>
    )
}

const StyledOl = styled.ol`
list-style: none;
padding: 0;
`;

const StyledLi = styled.li`
    height: 5rem;
    background: gray;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 2rem;
`;

const ButtonDiv = styled.div`
    display:flex;
    flex-direction: row;
`;

const Layout = styled.div`
 display:flex;
 flex-direction: column;
 margin: 0 30rem;
`

//maxpoints name, path headerImageurl databasename


TheoryPageEditor.propTypes = {

}

export default withRouter(TheoryPageEditor)

