import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ searchResult, setSearchResult ] = useState([])

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

  const runSearch = (e) => {
    e.preventDefault()
    if(!searchName) return

    const found = persons.filter(person => person.name.match(new RegExp(searchName, 'i')))
    if(found) setSearchResult(found)
    setSearchName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={runSearch}>
        <div>
          filter shown with <input value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        </div>
        <div>
          <button type="submit">search</button>
        </div>
      </form>
      {searchResult.map(r => <div key={r.name}>{r.name} {r.number}</div>)}
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
      <h2>Numbers</h2>
      {persons.map((p) => {
        return(
          <div key={p.name}>{p.name} {p.number}</div>
        )
      })}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
