import React from "react"
import styled from "styled-components"
import Button from "../assets/Button"

const StyledContainer = styled.div`
  margin-top: 15%;
  font-size: 1.7rem;
  text-align: center;

  p {
    font-weight: bold;
    font-family: Courier;
  }

  @media (min-width: 750px) {
    font-size: 2.5rem;
  }
`

const StartScreen = ({ btnClickHandler }) => {
  return (
    <StyledContainer>
      <p>Find Waldo, Odlaw and Whitebeard!</p>
      <Button btnClickHandler={btnClickHandler} text="Start game" />
    </StyledContainer>
  )
}

export default StartScreen