//service for leaderboards component
import axios from "axios"
const url = 'http://localhost:3001/leaderboards'

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(url, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${url}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}

const services = {
  getAll, 
  create, 
  update,
  remove
}

export default services