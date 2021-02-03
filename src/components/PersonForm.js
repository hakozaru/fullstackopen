import React from 'react'

import { createPerson } from "../services/persons"

const PersonForm = (props) => {
  const {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons,
  } = props

  const addNewPerson = (e) => {
    e.preventDefault()

    const found = persons.find(person => person.name === newName)
    if(found) {
      alert(`${newName} is already added to phonebook.`)
    } else {
      const newId = persons.length + 1
      const newPerson = {
        id: newId,
        name: newName,
        number: newNumber
      }

      createPerson(newPerson).then((res) => {
        setPersons(persons.concat(res))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  return(
    <>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm
