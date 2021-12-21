import React from "react"
import styled from "styled-components"

const StyledOuterContainer = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(200, 200, 200, 0.5);
  left: 0; top: 0; bottom: 0;
  z-index: 3;
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
`

const StyledInnerContainer = styled.div`
  margin-top: 15%;
  font-size: 1.7rem;
  text-align: center;

  p {
    font-weight: bold;
    font-family: Courier;
  }

  button {
    background: rgb(250, 80, 80);
    border: 2px solid #B2560D;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    color: white;

    &:hover {
      background: rgb(250, 120, 120);
    }

    &:active {
      background: rgb(250, 150, 150);
    }
  }
`

const ImgBlur = ({ gameEnd, btnClickHandler, timer }) => {
  return(
      <StyledOuterContainer>
        <StyledInnerContainer>
          <p>Find Waldo, Odlaw and Whitebeard!</p>
          <button onClick={btnClickHandler}>Start game</button>
        </StyledInnerContainer>
      </StyledOuterContainer>
  )
}

export default ImgBlur