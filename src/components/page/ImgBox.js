import React from 'react'
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
  return (
    <StyledContainer>
      <StyledImg src={image.imgSrc.default} />
    </StyledContainer>
  )
}

export default ImgBox