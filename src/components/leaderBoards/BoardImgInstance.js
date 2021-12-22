import React from "react"
import styled from "styled-components"

const StyledInstance = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 300px;
  margin: 0 10px;
  color: black;
  margin-top: 20px;

  .selected {
    box-shadow: 0 0 4px 4px rgb(150, 150, 150);
  }

`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 1px 1px rgb(150, 150, 150);
`

const BoardImgInstance = ({ puzzle, toggleSelect }) => {
  return (
    <StyledInstance>
      <StyledImg className={`board-puzzle ${puzzle.link === 'beach-puzzle' ? "selected" : " "}`} onClick={(e) => toggleSelect(e, puzzle.link)} src={puzzle.imgSrc.default} />
    </StyledInstance>
  )
}

export default BoardImgInstance