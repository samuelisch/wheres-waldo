import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const imageToSet = puzzleImages.find(img => img.link === imageLink)
    setPuzzleImage(imageToSet)
    setIsLoading(false)
    setCharImages(characterImages)
  }, [imageLink])

  const foundCharacter = (name, found) => {
    let copyCharImages = [...charImages]
    let char = copyCharImages.filter(character => character.name === name)
    char[0].found = found
    setCharImages(copyCharImages.map(character => character.id !== char.id ? character : char))
  }

  return (
    <>
      {!isLoading &&
        <>
          <Header pageImage={puzzleImage.name} charImages={charImages} />
          <ImgBox image={puzzleImage} foundCharacter={foundCharacter} />
        </>
      }
    </>
  )
}

export default Page