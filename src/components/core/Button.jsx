import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"

function Button({
  icon,
  text,
  backgroundColor,
  backgroundColorAfter,
  className,
  onClick,
  iconColor,
  disabled
}) {
  return (
    <Layout
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={className}
      backgroundColor={backgroundColor}
      backgroundColorAfter={backgroundColorAfter}
    >
      {text &&
        <span>{text}</span>
      }
      {icon &&
        <StyledMaterialIcon iconcolor={iconColor} icon={icon}></StyledMaterialIcon>
      }
    </Layout>)
}

const Layout = styled.div`
  background: ${props => props.backgroundColor};
  opacity: ${props => props.disabled ? 0.5 : 1};
  border-radius: 0.5rem;
  display:flex;
  align-items:center;
  text-align: center;
  margin: auto;
  height: 3rem;
  padding: 0.25rem 1rem;
  font-size:1.5rem;
  color:#f3f9fe;
  transition: all 0.05s ease-in-out;
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, .4);
  &:active {
    box-shadow: ${props => props.disabled ? "0" : "6px 6px 6px 4px rgba(0, 0, 0, .4)"};
    transform: ${props => props.disabled ? "scale(1)" : "scale(1.025)"};
    background: ${props => props.disabled ? props.backgroundColor : props.backgroundColorAfter};
  }
  span {
    user-select:none;
  }
`;

const StyledMaterialIcon = styled(MaterialIcon)`
  font-size: 4rem;
  color:${props => props.iconcolor ? props.iconcolor : "#f3f9fe"};
  user-select: none;
`;

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.any,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button

