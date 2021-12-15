import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import puzzleImages from '../images/puzzleImages'
import ImgInstance from './ImgInstance'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border: 3px solid green; ${/* temp */''}
`

const ImgGrid = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [puzzles, setPuzzles] = useState(null)

  useEffect(() => {
    setPuzzles(puzzleImages.map(puzzle => (
      <ImgInstance
        key={puzzle.id}
        puzzle={puzzle}
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

export default ImgGrid