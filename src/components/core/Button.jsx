import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"

function Button({icon, text, backgroundColor}) {
  return (
    <Layout backgroundColor = {backgroundColor}>
      {icon &&
        <MaterialIcon icon={icon}></MaterialIcon>
      }
      {text &&
        text
      }
    </Layout>)
}

const Layout = styled.div`
background: ${props => props.backgroundColor};

`;

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,

}

export default Button

