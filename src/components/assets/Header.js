import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 10px;
  background: rgb(0, 150, 255);

  h1 {
    font-size: 2rem;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <h1 id="title">Find Waldo</h1>
    </StyledHeader>
  )
}

export default Header