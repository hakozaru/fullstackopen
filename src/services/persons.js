import axios from 'axios'

const baseUrl = "/api/persons"

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

const updatePerson = (id, person) => {
  const req = axios.put(`${baseUrl}/${id}`, person)
  return req.then(res => res.data)
}

export { getAllPerson, createPerson, deletePerson, updatePerson }
