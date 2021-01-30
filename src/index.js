import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addNewPerson = (e) => {
    e.preventDefault()

    const found = persons.find(person => person.name === newName)
    if(found) {
      alert(`${newName} is already added to phonebook.`)
    } else {
      setPersons(persons.concat({ name: newName }))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => {
        return(
          <div key={p.name}>{p.name}</div>
        )
      })}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
