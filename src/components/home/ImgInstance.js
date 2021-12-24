import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledInstance = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  color: black;
  margin-top: 20px;
  box-shadow: 0 0 1px 1px rgb(150, 150, 150);
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;

  &:hover {
    transform: scale(1.05)
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`

const ImgInstance = ({ puzzle }) => {
  return (
    <Link to={`game/${puzzle.link}`}>
      <StyledInstance>
        <StyledImg src={puzzle.imgSrc.default} />
      </StyledInstance>
    </Link>
  )
}

export default ImgInstance