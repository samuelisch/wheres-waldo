import React from 'react'
import styled from 'styled-components'
import CharImage from './CharImage'
import Timer from './Timer'
import HomeButton from './HomeButton'

const StyledContainer = styled.div`
  background: rgb(0, 150, 255);
  position: fixed;
  width: 100%;
  height: 75px;
  z-index: 5;
`

const StyledHeader = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    margin: auto auto;
    font-size: 3rem;
  }
`

const StyledCharacters = styled.div`
  display: flex;
`

const HeaderSpace = styled.div`
  height: 75px;
`

const Header = ({ charImages, timer, stopTimer }) => {
  return (
    <>
      <StyledContainer>
        <StyledHeader>
          {!charImages && 
            <h1 id="title">Where's Waldo?</h1>
          }
          {charImages &&
            <>
              <HomeButton stopTimer={stopTimer} />
              <StyledCharacters>
                {charImages.map(img => (
                  <CharImage
                    key={img.id}
                    image={img}
                  />
                ))}
              </StyledCharacters>
              <Timer timer={timer} />
            </>
          }
        </StyledHeader>
      </StyledContainer>
      <HeaderSpace>
        &nbsp;
      </HeaderSpace>
  </>
  )
}

export default Header