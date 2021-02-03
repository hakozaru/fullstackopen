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

const deletePerson = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(res => res)
}

export { getAllPerson, createPerson, deletePerson }