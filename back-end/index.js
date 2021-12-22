const express = require('express');
const app = express();
const beachCharacters = require('./coordinates/beach')
const snowCharacters = require('./coordinates/snow')
const spaceCharacters = require('./coordinates/space')
let leaderboards = require('./leaderboards')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Index page for server</h1>')
})

app.get('/api/leaderboards/', (request, response) => {
  response.json(leaderboards)
})

const postEntry = (entry, place) => {
  const position = entry.position - 1
  const newEntry = {
    id: entry.id,
    name: entry.name,
    time: entry.time
  }
  const puzzlePlace = leaderboards[place]
  const newPuzzlePlace = [...puzzlePlace].slice(0, position).concat(newEntry).concat([...puzzlePlace].slice(position))
  leaderboards[place] = newPuzzlePlace
}

app.post('/api/leaderboards/:place', (request, response) => {
  const place = request.params.place
  const newEntry = request.body
  postEntry(newEntry, place)
  response.json({place: place, entry: newEntry})
})

const checkPosition = (place, time) => {
  console.log(time)
  const findPosition = (listTime, target) => {
    let low = 0
    let high = listTime.length - 1
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (listTime[mid] === target) {
        return mid
      }
      if (listTime[mid] > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return low
  }

  const list = leaderboards[place]
  let listTime = list.map(entry => entry.time)
  return findPosition(listTime, time + 1) + 1
}

app.put('/api/leaderboards/:place', (request, response) => {
  const place = request.params.place
  const timing = request.body.time
  const position = checkPosition(place, timing)
  response.send(position.toString())
})

const getPlaceCheck = (place) => {
  switch(place) {
    case 'beach-puzzle':
        return beachCharacters
    case 'snow-puzzle':
        return snowCharacters
    case 'space-puzzle':
        return spaceCharacters
    default:
        return false
  }
}


const coordsMatch = (character, place) => {
  const puzzle = getPlaceCheck(place)
  if (puzzle && puzzle[character.name]) {
    const x = puzzle[character.name][0]
    const y = puzzle[character.name][1]
    const charX = character.coords.x
    const charY = character.coords.y
    if ((charX >= x - 30 && charX <= x + 30) && (charY >= y - 30 && charY <= y + 30)) {
      return true
    }
  }
  return false
}

app.post('/api/characters/:place', (request, response) => {
  const place = request.params.place
  const character = request.body
  if (coordsMatch(character, place)) {
    response.json(true)
  } else {
    response.json(false)
  }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);