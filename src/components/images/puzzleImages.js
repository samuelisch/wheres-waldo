import { v4 as uuidv4 } from 'uuid'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./puzzles', false, /\.(png|jpe?g|svg)$/));

const puzzleImages = [
  {
    id: uuidv4(),
    link: 'beach-puzzle',
    name: 'Beach Puzzle',
    imgSrc: images['beach-waldo.jpg']
  },
  {
    id: uuidv4(),
    link: 'space-puzzle',
    name: 'Space Puzzle',
    imgSrc: images['space-waldo.jpg']
  },
  {
    id: uuidv4(),
    link: 'snow-puzzle',
    name: 'Snow Puzzle',
    imgSrc: images['snow-waldo.jpg']
  }
]

export default puzzleImages