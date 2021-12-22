import React, { useState } from "react"
import Header from "../assets/Header"
import BoardImgGrid from "./BoardImgGrid"

const LeaderBoard = () => {
  const [selectedImage, setSelectedImage] = useState('beach-puzzle')

  const toggleSelect = (e, link) => {
    const images = document.querySelectorAll('.board-puzzle')
    images.forEach(image => image.classList.remove('selected'))
    e.target.classList.toggle('selected')
    setSelectedImage(link)
  }

  return (
    <>
      <Header component="leaderboard" />
      <BoardImgGrid toggleSelect={toggleSelect} />
    </>
  )
}

export default LeaderBoard