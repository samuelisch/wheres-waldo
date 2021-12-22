import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../assets/Header'
import ImgGrid from './ImgGrid'
import Button from '../assets/Button'
import LoadingScreen from '../assets/LoadingScreen'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;

  button {
    padding: 20px;
    font-size: 1.7rem;
  }
`

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
        <Header component="main" />
        <ImgGrid />
      </>
    }
    <StyledDiv>
      <Link to="leaderboards"><Button text="View leaderboards" /></Link>
    </StyledDiv>
    </>
  )
}

export default Home