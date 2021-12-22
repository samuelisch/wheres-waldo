import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  margin: auto auto;
  font-size: 3rem;

  small {
    font-size: 1rem;
    color: rgb(250, 155, 0);
  }

  .red {
    color: rgb(235, 0, 0);
  }

  .blue {
    color: rgb(70, 70, 255);
  }
`

const Title = () => {
  return (
    <StyledTitle id="title">
      <span className="red">Where's </span>
      <span className="blue">Waldo?</span>
      <small>the game</small>
    </StyledTitle>
  )
}

export default Title