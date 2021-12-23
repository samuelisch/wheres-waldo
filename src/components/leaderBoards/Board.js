import React from "react"
import styled from "styled-components"
import BoardEntry from "./BoardEntry"
import { formatTime } from "../assets/utils"

const StyledContainer = styled.div`
  margin: 0 10px;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 0px 0 1px 1px rgb(150, 150, 150);
  border-radius: 5px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    padding: 0 10px;
    border-bottom: 1px solid rgb(150, 150, 150);
  }

  .heading {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .name {
    width: 70%;
    margin-left: 20px;
  }

  p {
    margin: 0;
    padding: 15px 0;
    font-size: 1.3rem;
  }
`

const HeaderList = styled.li`
  background: rgb(200, 200, 200);
`

const Board = ({ list }) => {
  return(
    <StyledContainer>
      <ul>
        <HeaderList>
          <p className="heading name">Name</p>
          <p className="heading time">Time</p>
        </HeaderList>
        {list &&
          list.map(entry => (
            <BoardEntry
              key={entry.id}
              name={entry.name}
              time={formatTime (entry.time)}
            />
          ))
        }
      </ul>
    </StyledContainer>
  )
}

export default Board