import React, { useState, useEffect } from 'react'
import Header from '../assets/Header'
import ImgGrid from './ImgGrid'
import LoadingScreen from '../assets/LoadingScreen'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ImgGrid !== null) {
      setIsLoading(false)
    }
  }, [])

  return (
    <>
    {isLoading ? 
      <LoadingScreen />
    :
      <>
        <Header />
        <ImgGrid />
      </>
    }
    </>
  )
}

export default Home