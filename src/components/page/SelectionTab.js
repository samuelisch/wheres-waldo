import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  background: rgba(245, 245, 245, 0.8);
  -webkit-user-select: none; /* Chrome/Safari */ 
  -moz-user-select: none; /* Firefox */

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background: rgb(230, 230, 230);
    cursor: default;
  }

  @media (min-width: 1024px) {
    padding: 5px;
    font-size: 1.3rem;
  }
`

const SelectionTab = ({ name, selectionEvent }) => {
  return (
    <StyledTab onClick={() => selectionEvent(name)}>
      <p>{name}</p>
    </StyledTab>
  )
}

export default SelectionTab