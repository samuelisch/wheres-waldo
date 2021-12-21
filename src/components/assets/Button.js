import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: rgb(250, 80, 80);
  border: 2px solid #B2560D;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  color: rgb(250,250,250);

  &:hover {
    background: rgb(250, 120, 120);
  }

  &:active {
    background: rgb(250, 150, 150);
  }

  @media (min-width: 750px) {
    font-size: 2.5rem;
    padding: 10px 20px;
  }
`

const Button = ({ btnClickHandler, text }) => {
  return (
    <StyledButton onClick={btnClickHandler}>{text}</StyledButton>
  )
}

export default Button