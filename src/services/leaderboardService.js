//service for leaderboards component
import axios from "axios"
const url = '/api/leaderboards'

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const getOne = (link) => {
  const request = axios.get(`${url}/${link}`)
  return request.then(response => response.data)
}

const create = (link, newObject) => {
  const request = axios.post(`${url}/${link}`, newObject)
  return request.then(response => response.data)
}

const check = (link, timing) => {
  const request = axios.put(`${url}/${link}`, timing)
  return request.then(response => response.data)
}

const leaderboardServices = {
  getAll,
  getOne, 
  create, 
  check
}

export default leaderboardServices