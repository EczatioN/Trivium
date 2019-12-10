import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../core/Title'

function TheoryPage({subject, text, assignments}) {
    return (
        <Layout>
            <Title text ="hello gais"></Title>
        </Layout>
    )
}

const Layout = styled.div`
    display:flex;
    flex-direction: column;
`;

TheoryPage.propTypes = {
 subject:PropTypes.string,
 text: PropTypes.string,
 assignments: PropTypes.string
}

export default TheoryPage

