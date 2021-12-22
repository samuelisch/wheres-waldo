import React from "react"
import styled from "styled-components"
import { formatTime } from "./utils"

const StyledTimer = styled.p`
  font-size: 2rem;
  display: none;
  align-items: center;
  color: rgb(240, 240, 240);

  @media (min-width: 500px) {
    display: flex;
  }
`

const Timer = ({ timer }) => {
  return (
    <StyledTimer>{formatTime(timer)}</StyledTimer>
  )
}

export default Timer