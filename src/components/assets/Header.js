import React from 'react'
import styled from 'styled-components'
import CharImage from './CharImage'
import Timer from './Timer'
import HomeButton from './HomeButton'

const StyledHeader = styled.div`
  background: rgb(0, 150, 255);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  height: 75px;
  z-index: 5;

  h1 {
    padding: 0 50px 0 10px;
    font-size: 2rem;
    margin: auto 0;
  }
`

const StyledCharacters = styled.div`
  display: flex;
  padding-right: 30px;
`

const HeaderSpace = styled.div`
  height: 75px;
`

const Header = ({ charImages, timer }) => {
  return (
    <>
      <StyledHeader>
        {!charImages && 
          <h1 id="title">Where's Waldo?</h1>
        }
        {charImages &&
          <>
            <HomeButton />
            <Timer timer={timer} />
            <StyledCharacters>
              {charImages.map(img => (
                <CharImage
                  key={img.id}
                  image={img}
                />
              ))}
            </StyledCharacters>
          </>
        }
      </StyledHeader>
      <HeaderSpace>
        &nbsp;
      </HeaderSpace>
    </>
  )
}

export default Header