import React from 'react'

import { deletePerson } from '../services/persons'

const Persons = (props) => {
  const { persons, setPersons } = props

  const removePerson = (person) => {
    if(window.confirm(`Delete ${person.name} ?`)) {
      deletePerson(person.id)
      .then(_ => {
        setPersons(persons.filter(p => p.id !== person.id))
        alert("delete successful.")
      })
      .catch(_ => alert("delete failed."))
    }
  }

  return(
    <>
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
