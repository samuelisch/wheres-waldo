import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharImage from './CharImage'

const StyledHeader = styled.div`
  background: rgb(0, 150, 255);
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 75px;

  h1 {
    font-size: 2rem;
    margin: auto 0;
    padding: 0 50px 0 10px;
  }
`

const StyledCharacters = styled.div`
  display: flex;
  padding-right: 10px;

  @media (min-width: 600px) {
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const HeaderSpace = styled.div`
  height: 75px;
`

const Header = ({ pageImage, charImages }) => {
  const [pageTitle, setPageTitle] = useState('Find Waldo')

  useEffect(() => {
    if (pageImage) {
      setPageTitle(pageImage)
    }
  }, [pageImage])

  return (
    <>
      <StyledHeader>
        <h1 id="title">{pageTitle}</h1>
        {charImages &&
          <StyledCharacters>
            {charImages.map(img => (
              <CharImage
                key={img.id}
                image={img}
              />
            ))}
          </StyledCharacters>
        }
      </StyledHeader>
      <HeaderSpace>
        &nbsp;
      </HeaderSpace>
    </>
  )
}

export default Header