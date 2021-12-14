import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledInstance = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  border: 1px solid red; ${/* temp */''}
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  
`

const ImgInstance = ({ puzzle }) => {
  return (
    <Link to={`/game/${puzzle.link}`}>
      <StyledInstance>
        <StyledImg src={puzzle.imgSrc.default} />
        <p>id: {puzzle.id}</p>
        <p>name: {puzzle.name}</p>
      </StyledInstance>
    </Link>
  )
}

export default ImgInstance