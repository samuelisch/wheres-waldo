import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledCursor = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #121212;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
`

const Cursor = () => {
  return (
    <StyledCursor className="cursor" />
  )
}

export default Cursor