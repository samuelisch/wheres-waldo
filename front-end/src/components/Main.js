import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import LeaderBoard from './leaderBoards/LeaderBoard'
import Page from './page/Page'

const Main = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game/:imageLink" element={<Page />} />
          <Route path="leaderboards" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Main