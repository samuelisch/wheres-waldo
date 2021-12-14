import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
`

const ImgBox = ({ image }) => {
  return (
    <>
      <StyledImg src={image.imgSrc.default} />
    </>
  )
}

export default ImgBox