import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Title({text}) {
    return (
        <Styledh1>
            {text}
        </Styledh1>
    )
}

const Styledh1 = styled.h1`

text-align: center;
`;

Title.propTypes = {
    text: PropTypes.string
}

export default Title

