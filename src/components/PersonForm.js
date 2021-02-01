import React from 'react'

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
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }))
      setNewName('')
      setNewNumber('')
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
