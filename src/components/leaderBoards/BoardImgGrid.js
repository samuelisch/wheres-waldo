import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import puzzleImages from '../images/puzzleImages'
import BoardImgInstance from './BoardImgInstance'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 50px;
`

const BoardImgGrid = ({ toggleSelect }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [puzzles, setPuzzles] = useState(null)

  useEffect(() => {
    setPuzzles(puzzleImages.map(puzzle => (
      <BoardImgInstance
        key={puzzle.id}
        puzzle={puzzle}
        toggleSelect={toggleSelect}
      />
    )))
    setIsLoading(false)
  }, [])

  return (
      isLoading ?
        null
      :
      <StyledGrid>
        {puzzles}
      </StyledGrid>
  )
}

export default BoardImgGrid