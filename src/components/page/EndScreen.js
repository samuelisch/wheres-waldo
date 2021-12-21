import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin-top: 10%;
  font-size: 1.7rem;
  text-align: center;
`

const EndScreen = ({ timer }) => {
  return (
    <StyledContainer>
      <p>You found all characters in {timer}</p>
    </StyledContainer>
  )
}

export default EndScreen