import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;

  button {
    background: rgb(250, 80, 80);
    border: 2px solid #B2560D;
    border-radius: 5px;
    padding: 5px 10px;
    color: rgb(250,250,250);

    &:hover {
      background: rgb(250, 120, 120);
    }
  }
`

const HomeButton = ({ stopTimer }) => {
  return (
    <StyledContainer>
      <Link to="/" onClick={stopTimer}><button>Return to Main</button></Link>
    </StyledContainer>
  )
}

export default HomeButton