import axios from 'axios'

const baseUrl = "http://localhost:3002/persons"

const getAllPerson = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const createPerson = person => {
  const req = axios.post(baseUrl, person)
  return req.then(res => res.data)
}

export { getAllPerson, createPerson }
