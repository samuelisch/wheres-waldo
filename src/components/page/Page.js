import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import puzzleImages from '../images/puzzleImages'
import characterImages from '../images/characterImages'
import ImgBox from './ImgBox'
import Header from '../assets/Header'

const Page = () => {
  const params = useParams()
  const imageLink = params.imageLink

  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const imageToSet = puzzleImages.find(img => img.link === imageLink)
    setImage(imageToSet)
    setIsLoading(false)
  }, [imageLink])

  return (
    <>
      {!isLoading && 
        <>
          <Header />
          <ImgBox image={image} />
        </>
      }
    </>
  )
}

export default Page