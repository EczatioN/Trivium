import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Title({children}) {
    return (
        <Styledh1>
            {children}
        </Styledh1>
    )
}

const Styledh1 = styled.h1`

text-align: center;
`;

Title.propTypes = {
    children: PropTypes.string
}

export default Title

