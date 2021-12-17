import React, { useState, useEffect} from 'react'
import styled from 'styled-components'

const StyledSelect = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #121212;
  border-radius: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
`

const Highlight = ({ hidden, position }) => {
  const [boxPosition, setBoxPosition] = useState(position)

  useEffect(() => {
    setBoxPosition(position)
  }, [position])

  return (
    <StyledSelect 
      className={"cursor " + (hidden ? 'hidden' : ' ')} 
      style={{
        left: `${boxPosition.x}px`,
        top: `${boxPosition.y}px`,
      }} 
    />
  )
}

export default Highlight