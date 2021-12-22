import React from "react"
import styled from "styled-components"

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: rgba(240,240,240,0.6);
  font-size: 1.7rem;
  padding: 15px;
  border: ${props => props.result === 'success' ? "2px solid green" : "2px solid red" };
  color: ${props => props.result === 'success' ? "green" : "red" };
  opacity: ${props => props.result ? "100%" : "0%"};
  transition: transform 300ms ease;
  transform: translateY(${
    props => props.result ? "50px" : "-100px"
  });

  p {
    margin: 0;
  }
`

const Result = ({ result }) => {

  return (
    <OuterContainer>
      {
        <StyledContainer result={result}>
          {result === "success" &&
            <p>You found one!</p>
          }
          {result === "fail" &&
            <p>Try again!</p>
          }
        </StyledContainer>
      }
    </OuterContainer>
  )
}

export default Result