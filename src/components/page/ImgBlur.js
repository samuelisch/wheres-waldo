import React from "react"
import styled from "styled-components"
import StartScreen from "./StartScreen"
import EndScreen from "./EndScreen"

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

const ImgBlur = ({ gameEnd, btnClickHandler, timer }) => {
  return(
      <StyledOuterContainer>
        <>
          {!gameEnd &&
            <StartScreen btnClickHandler={btnClickHandler} />
          }
          {gameEnd &&
            <EndScreen timer={timer} />
          }
        </>
      </StyledOuterContainer>
  )
}

export default ImgBlur