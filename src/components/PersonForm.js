import React, { useState, useEffect } from 'react'

import { createPerson, updatePerson } from "../services/persons"
import FlashMessage from './FlashMessage'

const PersonForm = (props) => {
  const defaultFlashObj = { message: null, error: false }
  const [flashMsg, setFlashMsg] = useState(defaultFlashObj)

  useEffect(() => {
    setTimeout(() => {
      setFlashMsg(defaultFlashObj)
    }, 5000)
  }, [flashMsg])

  const {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons,
  } = props

  const resetPersonInfoInputs = () => {
    setNewName("")
    setNewNumber("")
  }

  const addNewPerson = (e) => {
    e.preventDefault()

    const found = persons.find(person => person.name === newName)
    if(found) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(found.id, {...found, number: newNumber})
        .then(res => {
          setPersons(persons.map(person => person.id !== res.id ? person : res))
          resetPersonInfoInputs()
          setFlashMsg({
            message: `Update successful.`,
            error: false
          })
        })
        .catch(_ => alert("update failure."))
      }
    } else {
      const newId = persons.length + 1
      const newPerson = {
        id: newId,
        name: newName,
        number: newNumber
      }

      createPerson(newPerson).then((res) => {
        setPersons(persons.concat(res))
        resetPersonInfoInputs()
        setFlashMsg({
          message: `Added ${newPerson.name}`,
          error: false
        })
      })
      .catch(_ => {
        setFlashMsg({
          message: `Error!: New person create failure.`,
          error: true
        })
      })
    }
  }

  return(
    <>
      <FlashMessage flashMessage={flashMsg} />
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
