import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import puzzleImages from '../images/puzzleImages'
import characterImages from '../images/characterImages'
import ImgBox from './ImgBox'
import Header from '../assets/Header'

const Page = () => {
  const params = useParams()
  const imageLink = params.imageLink

  const [isLoading, setIsLoading] = useState(true)
  const [puzzleImage, setPuzzleImage] = useState(null)
  const [charImages, setCharImages] = useState(null)
  const [timer, setTimer] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const addFound = (images) => {
      return images.map(image => ({...image, found: false}))
    }
    const imageToSet = puzzleImages.find(img => img.link === imageLink)
    setPuzzleImage(imageToSet)
    setCharImages(addFound(characterImages))
    setIsLoading(false)
  }, [imageLink])

  const foundCharacter = (name) => {
    let copyCharImages = [...charImages]
    let char = copyCharImages.filter(character => character.name === name)
    char[0].found = true
    setCharImages(copyCharImages.map(character => character.id !== char.id ? character : char))
  }

  //TIMER functions
  const handleStart = () => {
    setTimerActive(true)
    counterRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const handleStop = () => {
    if (timerActive) {
      setTimerActive(false)
      clearInterval(counterRef.current)
    }
  }

  const timerToggleHandler = () => {
    if (timerActive) {
      handleStop()
    } else {
      handleStart()
    }
  }

  return (
    <>
      {!isLoading &&
        <>
          <Header 
            pageImage={puzzleImage.name} 
            charImages={charImages} 
            timer={timer}
            stopTmer={handleStop}
          />
          <ImgBox 
            image={puzzleImage} 
            foundCharacter={foundCharacter} 
            charImages={charImages} 
            timer={timer}
            timerToggle={timerToggleHandler}
          />
        </>
      }
    </>
  )
}

export default Page