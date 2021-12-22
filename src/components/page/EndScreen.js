import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { formatTime } from "../assets/utils"
import Button from "../assets/Button"

const StyledContainer = styled.div`
  margin-top: 10%;
  font-size: 1.7rem;
  text-align: center;
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

const EndScreen = ({ timer }) => {
  return (
    <StyledContainer>
      <p>You found all characters in {formatTime(timer)}!</p>
      <p>You are ranked #{} on the leaderboards</p>
      <StyledButtons>
        <Button btnClickHandler={() => window.location.reload()} text="Try again" />
        <Link to="/"><Button text="View leaderboards" /></Link>
      </StyledButtons>
    </StyledContainer>
  )
}

export default EndScreen