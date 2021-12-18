import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  background: white;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background: rgb(230, 230, 230);
  }

  @media (min-width: 1024px) {
    padding: 5px;
  }
`

const SelectionTab = ({ name }) => {
  return (
    <StyledTab>
      <p>{name}</p>
    </StyledTab>
  )
}

export default SelectionTab