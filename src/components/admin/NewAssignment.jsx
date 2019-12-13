import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { FirebaseContext } from '../Firebase'
import { withRouter } from 'react-router-dom';
import Textbox from '../admin/TextBox'
import Title from '../core/Title'
import Button from '../core/Button'
import styled from 'styled-components'
import { useCollectionOnce, useDocumentOnce } from 'react-firebase-hooks/firestore';
import LoadingCircle from '../core/LoadingCircle'

function NewAssignment({ match, history }) {
    const firebase = useContext(FirebaseContext)
    const [assignments, loading, error] = useCollectionOnce(
        firebase.db.collection(`excercises/${match.params.area}/assignments`)
    );

    const [newQuestion, setNewQuestion] = useState();
    const [newAnswer, setNewAnswer] = useState();
    const [newSolution, setNewSolution] = useState();


    function saveData() {
        var doc = {};
        doc.question = newQuestion
        doc.answer = newAnswer
        doc.solution = newSolution
        firebase.db.collection("excercises").doc(match.params.area).collection("assignments").doc(assignments.docs.length.toString()).set(doc);
        history.replace(`/admin/omraden/${match.params.area}`)
    }
    if (assignments) {


        console.log(assignments.docs)
    }
    return (

        <React.Fragment>
            {error &&
                `Error: ${error}`
            }

            {loading &&
                <LoadingCircle />
            }

            {assignments &&

                <Layout>
                    <Title>Uppgift {assignments.docs.length}</Title>
                    <Styledh2>Fråga</Styledh2>
                    <Textbox onChange={setNewQuestion}></Textbox>
                    <Title>Svar</Title>
                    <Textbox onChange={setNewAnswer}></Textbox>
                    <Title>Lösning</Title>
                    <Textbox onChange={setNewSolution}></Textbox>
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
NewAssignment.propTypes = {

}

const Layout = styled.div`
    margin: 0 30rem;
`;



const Styledh2 = styled.h2`
    text-align: center;
`;







export default withRouter(NewAssignment)

