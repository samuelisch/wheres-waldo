import React from "react"

const BoardEntry = ({name, time}) => {
  return (
    <li>
      <p className="name">{name}</p>
      <p className="time">{time}</p>
    </li>
  )
}

export default BoardEntry