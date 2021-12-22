import React from "react"
import styled from "styled-components"

const BoardEntry = ({name, time}) => {
  return (
    <li>
      <p className="name">{name}</p>
      <p className="time">{time}</p>
    </li>
  )
}

export default BoardEntry