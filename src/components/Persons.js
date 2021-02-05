import React, { useState, useEffect } from 'react'

import { deletePerson } from '../services/persons'
import FlashMessage from './FlashMessage'

const Persons = (props) => {
  const { persons, setPersons } = props
  const defaultFlashObj = { message: null, error: false }
  const [flashMsg, setFlashMsg] = useState(defaultFlashObj)

  useEffect(() => {
    setTimeout(() => {
      setFlashMsg(defaultFlashObj)
    }, 5000)
  }, [flashMsg])

  const removePerson = (person) => {
    if(window.confirm(`Delete ${person.name} ?`)) {
      deletePerson(person.id)
      .then(_ => {
        setPersons(persons.filter(p => p.id !== person.id))
        setFlashMsg({
          message: `Delete successful.`,
          error: false
        })
      })
      .catch(_ => {
        setFlashMsg({
          message: `Information of ${person.name} has already been removed from server`,
          error: true
        })
      })
    }
  }

  return(
    <>
      <FlashMessage flashMessage={flashMsg} />
      {persons.map((p) => {
        return(
          <div key={p.name}>
            {p.name} {p.number}
            <button onClick={() => removePerson(p)}>delete</button>
          </div>
        )
      })}
    </>
  )
}

export default Persons
