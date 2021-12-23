//service for game component
import axios from "axios"
const url = '/api/characters'

const checkChoice = (link, newObject) => {
  const request = axios.post(`${url}/${link}`, newObject)
  return request.then(response => response.data)
}

export default checkChoice