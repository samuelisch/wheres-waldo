import React, { useState } from 'react'
import styled from 'styled-components'
import Highlight from './Highlight'
import axios from 'axios'

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  max-width: 1440px;
  margin: 0 auto;

  .hidden {
    display: none;
  }
`

const StyledImg = styled.img`
  width: 100%;
`

const ImgBox = ({ image, foundCharacter, charImages }) => {
  const [hideBox, setHideBox] = useState(true)
  const [actualCoords, setActualCoords] = useState({
    x: undefined,
    y: undefined
  })
  const [boxCoords, setBoxCoords] = useState({
    x: undefined,
    y: undefined,
  })

  const showCoords = (e) => {
    if (hideBox) {
      const puzzle = e.target
      console.log('size: ', puzzle.width, puzzle.height)
      console.log('coords: ', e.pageX, e.pageY)
      const relativeX = e.pageX - puzzle.offsetLeft
      const relativeY = e.pageY - puzzle.offsetTop
      const widthRatio = 1440 / puzzle.width
      const heightRatio = 924 / puzzle.height
      const actualX = Math.round(relativeX * widthRatio)
      const actualY = Math.round(relativeY * heightRatio)
      console.log(`ratio of diff is ${widthRatio}, ${heightRatio}`)
      console.log(`actual coords is ${actualX}, ${actualY}`)
      setBoxCoords({
        x: e.pageX,
        y: e.pageY
      })
      setActualCoords({
        x: actualX,
        y: actualY
      })
      setHideBox(false)
    } else {
      setHideBox(true)
    }
  }

  const selectionEvent = (name) => {
    setHideBox(true)
    const lowerCase = (name) => {
      return name.split('').map(letter => letter.toLowerCase()).join('')
    }

    const character = {
      name: lowerCase(name),
      coords: {x: actualCoords['x'], y: actualCoords['y']}
    }
    axios.post(`http://localhost:3001/api/characters/${image.link}`, character)
      .then(response => foundCharacter(name, response.data))
  }

  return (
    <>
      <StyledContainer>
        <Highlight 
          hidden={hideBox} 
          position={boxCoords}
          selectionEvent={selectionEvent}
          charImages={charImages}
        />
        <StyledImg  
          className="puzzleImage" 
          src={image.imgSrc.default} 
          alt={image.name} 
          onClick={showCoords}  
        />
      </StyledContainer>
    </>
  )
}

export default ImgBox