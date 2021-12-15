import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.showChar ? "100%" : "20%"};

  span {
    font-size: 1.3rem;
    font-weight: bold;
  }
`

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`

const CharImage = ({ image }) => {
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    setShowImage(!image.found)
  }, [image])

  return (
    <StyledContainer showChar={showImage} >
      <StyledImage src={image.imgSrc.default} alt={image.name} />
      <span>{image.name}</span>
    </StyledContainer>
  )
}

export default CharImage