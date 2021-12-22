import { v4 as uuidv4 } from 'uuid'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./characters', false, /\.(png|jpe?g|svg)$/));

const characterImages = [
  {
    id: uuidv4(),
    name: 'Waldo',
    imgSrc: images['waldo.png'],
  },
  {
    id: uuidv4(),
    name: 'Odlaw',
    imgSrc: images['odlaw.png'],
  },
  {
    id: uuidv4(),
    name: 'Whitebeard',
    imgSrc: images['whitebeard.png'],
  }
]

export default characterImages