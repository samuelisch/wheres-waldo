import React, { useState, useEffect } from "react"
import Header from "../assets/Header"
import BoardImgGrid from "./BoardImgGrid"
import Board from "./Board"
import leaderboardServices from "../../services/leaderboardService"

const LeaderBoard = () => {
  const [selectedImage, setSelectedImage] = useState('beach-puzzle')
  const [list, setList] = useState(null)

  useEffect(() => {
    leaderboardServices
      .getAll()
      .then(initialList => {
        console.log(initialList)
        setList(initialList)
      })
      .catch(error => console.log(error))
  }, [])

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
      <Board list={list} selection={selectedImage} />
    </>
  )
}

export default LeaderBoard