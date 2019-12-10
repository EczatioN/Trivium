import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../core/Title'


function TheoryPage({subject, text, assignments, headerImage}) {
    return (
        <Layout>
            <Title>{subject}</Title>
            <HeaderImage src = {headerImage} alt={subject} ></HeaderImage>
            <TheoryText><h2>Hello gais</h2>
            Welcome to my page
            </TheoryText>
        </Layout>
    )
}

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    
`;

const HeaderImage = styled.img`
    width: calc(100vw-2rem);
    height: 10rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
`;

const TheoryText = styled.div`
margin: 0.5rem 1rem;
font-size: 1.4rem;
img {

}

h2 {
font-size: 1.7rem;
margin: 0.5rem 0;
}
`;

TheoryPage.propTypes = {
 subject:PropTypes.string,
 text: PropTypes.string,
 assignments: PropTypes.string,
 headerImage: PropTypes.string
}

export default TheoryPage

