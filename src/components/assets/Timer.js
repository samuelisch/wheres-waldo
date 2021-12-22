import React from "react"
import styled from "styled-components"
import { formatTime } from "./utils"

const StyledTimer = styled.p`
  font-size: 2rem;
  display: none;
  align-items: center;
  color: rgb(15, 15, 15);

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