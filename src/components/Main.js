import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Page from './page/Page'

const Main = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game/:imageLink" element={<Page />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Main