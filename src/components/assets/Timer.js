import React from "react"
import styled from "styled-components"

const StyledTimer = styled.p`
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: rgb(240, 240, 240);
`

const Timer = ({ timer }) => {
  return (
    <StyledTimer>{timer}</StyledTimer>
  )
}

export default Timer