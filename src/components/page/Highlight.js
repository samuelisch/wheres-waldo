import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import SelectionBox from './SelectionBox'

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
`

const StyledSelect = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #121212;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`

const Highlight = ({ hidden, position, selectionEvent, charImages }) => {
  const [boxPosition, setBoxPosition] = useState(position)
  const [hideElement, setHideElement] = useState(hidden)

  useEffect(() => {
    setBoxPosition(position)
    setHideElement(hidden)
  }, [position, hidden])

  return (
    <StyledContainer 
      className={(hideElement ? 'hidden' : ' ')}
      style={{
        left: `${boxPosition.x}px`,
        top: `${boxPosition.y}px`,
      }}
    >
      <StyledSelect />
      <SelectionBox 
        selectionEvent={selectionEvent}
        charImages={charImages}
      />
    </StyledContainer>
  )
}

export default Highlight