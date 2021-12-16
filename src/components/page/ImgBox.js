import React, { useState } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  max-width: 1440px;
  margin: 0 auto;
`

const StyledImg = styled.img`
  width: 100%;
`

const ImgBox = ({ image }) => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [click, setClick] = useState({
    x: undefined,
    y: undefined,
  })

  const showCoords = (e) => {
    const puzzle = e.target
    console.log('size: ', puzzle.width, puzzle.height)
    console.log('coords: ', e.pageX, e.pageY)
    console.log('top: ', puzzle.offsetTop)
    console.log('left: ', puzzle.offsetLeft)
    const relativeX = e.pageX - puzzle.offsetLeft
    const relativeY = e.pageY - puzzle.offsetTop
    console.log('relative coords: ', relativeX, relativeY)
    setSize({
      width: puzzle.width,
      height: puzzle.height
    })
    setClick({
      x: relativeX,
      y: relativeY
    })
  }

  const showComparison = () => {
    console.log(`size of window: ${size.width}, ${size.height}`)
    const widthRatio = 1440 / size.width
    const heightRatio = 924 / size.height
    console.log(`ratio of diff is ${widthRatio}, ${heightRatio}`)
    console.log(`click area is ${click.x}, ${click.y}`)
    console.log(`relative click is ${Math.round(click.x * widthRatio)}, ${Math.round(click.y * heightRatio)}`)
  }

  return (
    <>
      <StyledContainer>
        <StyledImg  
          className="puzzleImage" 
          src={image.imgSrc.default} 
          alt={image.name} 
          onClick={showCoords}  
        />
      </StyledContainer>
      <button type="button" onClick={showComparison}>Show comparison</button>
    </>
  )
}

export default ImgBox