import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .loader div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: black;
    animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  .loader div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  .loader div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  .loader div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }

  @keyframes loader {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`

const LoadingScreen = () => {
  return (
    <StyledContainer>
      <p>Loading</p>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledContainer>
  )
}

export default LoadingScreen