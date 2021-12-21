import React from "react"
import styled from "styled-components"
import { formatTime } from "../assets/utils"
import Button from "../assets/Button"

const StyledContainer = styled.div`
  margin-top: 10%;
  font-size: 1.7rem;
  text-align: center;
`

const EndScreen = ({ timer }) => {
  return (
    <StyledContainer>
      <p>You found all characters in {formatTime(timer)}!</p>
      <p>You need to hit below {} to be on the leaderboards</p>
      <Button btnClickHandler={() => window.location.reload()} text="Try again" />
    </StyledContainer>
  )
}

export default EndScreen