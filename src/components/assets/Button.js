import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: rgb(250, 80, 80);
  border: 2px solid #B2560D;
  border-radius: 5px;
  padding: 5px 10px;
  margin: auto 0;
  color: rgb(250,250,250);

  &:hover {
    background: rgb(250, 120, 120);
  }

  &:active {
    background: rgb(250, 150, 150);
  }
`

const Button = ({ btnClickHandler, text, type, className }) => {
  return (
    <StyledButton className={className} type={type} onClick={btnClickHandler}>{text}</StyledButton>
  )
}

export default Button