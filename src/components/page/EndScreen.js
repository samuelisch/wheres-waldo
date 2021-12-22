import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "../assets/Button"

const StyledContainer = styled.div`
  margin-top: 10%;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const StyledInputs = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledInput = styled.input`
  padding: 5px;
  margin: 10px 0;
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

const EndScreen = ({ timer, position, submitHandler }) => {
  const clickHandler = (e) => {
    e.preventDefault()
    const input = document.querySelector('.inputLeaderboard')
    document.querySelector('.buttonLeaderboard').disabled = true
    input.disabled = true
    submitHandler(input.value)

  }

  return (
    <StyledContainer>
      <div>
        <p>You found all characters in {timer}!</p>
        <p>You will be ranked #{position} on the leaderboards</p>
      </div>
      <StyledInputs onSubmit={clickHandler}>
          <StyledInput type="text" className="inputLeaderboard" placeholder="Name"  required />
          <Button className="buttonLeaderboard" type="submit" text="Add score" />
      </StyledInputs>
      <StyledButtons>
        <Button btnClickHandler={() => window.location.reload()} text="Try again" />
        <Link to="/leaderboards"><Button text="View leaderboards" /></Link>
      </StyledButtons>
    </StyledContainer>
  )
}

export default EndScreen