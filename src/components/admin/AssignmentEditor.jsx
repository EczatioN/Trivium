import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'
import Title from '../core/Title'
import styled from 'styled-components'
import Textbox from '../admin/TextBox'
import Button from '../core/Button';
import LoadingCircle from '../core/LoadingCircle';

function AssignmentEditor({ match, history }) {
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        firebase.db.collection('excercises').doc(match.params.area).collection('assignments').doc(match.params.id)
            .onSnapshot(function (doc) {
                const id = doc.data();
                setQuestion(id.question);
                setAnswer(id.answer);
                setSolution(id.solution);
            });

    }, [match, firebase])

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [solution, setSolution] = useState();

    const [newQuestion, setNewQuestion] = useState();
    const [newAnswer, setNewAnswer] = useState();
    const [newSolution, setNewSolution] = useState();


    function saveData() {
        var doc = {};
        doc.question = newQuestion ? newQuestion : question;
        doc.answer = newAnswer ? newAnswer : answer;
        doc.solution = newSolution ? newSolution : solution;
        firebase.db.collection("excercises").doc(match.params.area).collection("assignments").doc(match.params.id).set(doc);
        history.replace(`/admin/omraden/${match.params.area}`)
    }



    return (
        <React.Fragment>
            {
                (solution === false) &&
                <LoadingCircle />
            }
            {
                solution &&
                <Layout>
                    <Title>Uppgift {match.params.id}</Title>
                    <Styledh2>Fråga</Styledh2>
                    <Textbox defaultValue={question} onChange={setNewQuestion}></Textbox>
                    <Title>Svar</Title>
                    <Textbox defaultValue={answer} onChange={setNewAnswer}></Textbox>
                    <Title>Lösning</Title>
                    <Textbox defaultValue={solution} onChange={setNewSolution}></Textbox>
                    <Button
                        icon="save"
                        backgroundColor="#43b950"
                        backgroundColorAfter="#3aaa47"
                        text="Spara"
                        onClick={saveData}></Button>

                </Layout>
            }
        </React.Fragment>
    )
}

const Layout = styled.div`
    margin: 0 30rem;
`;

const Styledh2 = styled.h2`
    text-align: center;
`;

AssignmentEditor.propTypes = {

}

export default withRouter(AssignmentEditor)

