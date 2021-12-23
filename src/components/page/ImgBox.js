import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Highlight from './selectionComponents/Highlight'
import Result from './selectionComponents/Result'
import ImgBlur from './blurComponents/ImgBlur'
import checkChoice from '../../services/checkService'
import leaderboardServices from '../../services/leaderboardService'
import { formatTime } from "../assets/utils"
import { v4 as uuidv4 } from 'uuid'

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  max-width: 1440px;
  margin: 0 auto;

  .hidden {
    display: none;
  }
`

const StyledImgContainer = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid ${
    props => props.result === null 
    ? "transparent" 
    : props.result === 'success' 
    ? "green" : "red"
  };
`

const StyledImg = styled.img`
  width: 100%;
`

const ImgBox = ({ image, foundCharacter, charImages, timer, timerToggle }) => {
  const [hideBox, setHideBox] = useState(true)
  const [gameEnd, setGameEnd] = useState(false)
  const [gameBlur, setGameBlur] = useState(true)
  const [leaderboardPosittion, setLeaderboardPosition] = useState(null)
  const [actualCoords, setActualCoords] = useState({
    x: undefined,
    y: undefined
  })
  const [boxCoords, setBoxCoords] = useState({
    x: undefined,
    y: undefined,
  })
  const [result, setResult] = useState(null)

  //timer for displaying result of selection
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [result])

  const showCoords = (e) => {
    if (hideBox) {
      const container = document.querySelector(".container") // as container is relative positioned
      const puzzle = e.target
      const relativeX = e.pageX - container.offsetLeft
      const relativeY = e.pageY - container.offsetTop
      const widthRatio = 1440 / puzzle.width
      const heightRatio = 924 / puzzle.height
      const actualX = Math.round(relativeX * widthRatio)
      const actualY = Math.round(relativeY * heightRatio)
      setBoxCoords({
        x: e.pageX,
        y: e.pageY
      })
      setActualCoords({
        x: actualX,
        y: actualY
      })
      setHideBox(false)
    } else {
      setHideBox(true)
    }
  }

  const displayResult = (name) => {
    if (name) {
      setResult('success')
    } else {
      setResult('fail')
    }
  }

  const checkPosition = (timer, link) => {
    const objTime = {time: timer}
    leaderboardServices
      .check(link, objTime)
      .then(position => {
        setLeaderboardPosition(position)
      })
  }

  const submitHandler = (name) => {
    const postObj = {
      id: uuidv4(),
      name: name,
      positon: leaderboardPosittion,
      time: timer,
    }
    leaderboardServices
      .create(image.link, postObj)
      .then(returnedData => {
        return
      })
  }

  const isAllFound = () => {
    if (charImages.every(image => image.found)) {
      timerToggle() //END GAME
      checkPosition(timer, image.link)
      setGameEnd(true)
      setGameBlur(true)
    } else {
      displayResult(true)
    }
  }

  const selectionEvent = (name) => {
    setHideBox(true)
    const lowerCase = (name) => {
      return name.split('').map(letter => letter.toLowerCase()).join('')
    }

    const character = {
      name: lowerCase(name),
      coords: {x: actualCoords['x'], y: actualCoords['y']}
    }
    checkChoice(image.link, character)
      .then(returnedData => {
        if (returnedData) {
          foundCharacter(name, returnedData)
          isAllFound()
        } else {
          displayResult(false)
        }
      })
  }

  const startHandler = () => {
    timerToggle()
    setGameBlur(false)
  }

  return (
    <>
      <Result result={result} />
      <StyledContainer>
        <Highlight 
          hidden={hideBox} 
          position={boxCoords}
          selectionEvent={selectionEvent}
          charImages={charImages}
        />
        <StyledImgContainer className="container" result={result}>
          {gameBlur &&
            <ImgBlur 
              timer ={formatTime(timer)} 
              gameEnd={gameEnd} 
              btnClickHandler={startHandler} 
              position={leaderboardPosittion}
              submitHandler={submitHandler}
            />
          }
          <StyledImg  
            className="puzzleImage" 
            src={image.imgSrc.default} 
            alt={image.name} 
            onClick={showCoords}  
          />
        </StyledImgContainer>
      </StyledContainer>
    </>
  )
}

export default ImgBox