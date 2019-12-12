import React, { lazy } from 'react';
import PropTypes, { array } from 'prop-types';
import styled from 'styled-components';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import logo from '../../media/TriviumLogo.svg';
import { FirebaseContext } from '../Firebase';
import Title from '../core/Title';
import TextBox from '../core/TextBox';
import { chownSync } from 'fs';
import Card from '../core/Card';
import title from '../core/Title';
import Button from '../core/Button';
import Dropdown from './SimpleExpansionPanel';
import SimpleExpansionPanel from './SimpleExpansionPanel';
function ResultsPage(props) {
    const results = [
        {id:0,
         question:'Har du penis?',
         answer:'No',
         solution:'Kolla',   
        },
        {id:1,
            question:'',
            answer:'',
            solution:'',   
        }
        

    ];
    


    return (
        <React.Fragment>

            
            <Layout>
                <Title>Resultat</Title>

                <InfoCard>
                    <Resultat><Procent>  <strong>90%</strong>  </Procent></Resultat>
                    <Resultat>9/10</Resultat>
                </InfoCard>
                
                <UppgiftLista>
                    
                {
                    results.map(result => ( 
                        <UppgiftListaItem> <SimpleExpansionPanel result = {result.id} question = {result.question} answer = {result.answer} solution = {result.solution} >  </SimpleExpansionPanel> </UppgiftListaItem>
                    ))
                    
                }


                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                   

                </UppgiftLista>
      
  
            </Layout>


        </React.Fragment>
    )

}



const Layout = styled.div`
display:flex;
flex-direction: column;
font-family: Nunito;
`;
const InfoCard = styled(Card)`
    color: #02c436;
    margin: 0rem 1rem 1rem 1rem;
    border-radius: 0.3rem;
    height: fit-content;
    
    
`
const Resultat = styled.p`
    text-align:center;
    margin:0.5rem;
   
`;
const Procent = styled.p`
    color:#02c436;
    margin:0.5rem;
    font-size:2rem;
`;
const UppgiftLista = styled.ol`
    margin:1rem 1rem 1rem 1rem;
    font-size: 2rem;
    
`;
const UppgiftListaItem = styled.li`
display:fit-content;
margin:1rem;
border-style:solid;
border-width:0.1rem;
border-color:rgba(212, 212, 212, 0.65);
border-radius:0.3rem;
background-color:#ffffff;
`;

const Fel = styled.a`
    color:#ff0000;
`;
const Ratt = styled.a`
    color:#02c436;
`;
ResultsPage.propTypes = {

}

export default ResultsPage; 

