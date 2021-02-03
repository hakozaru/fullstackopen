import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ searchResult, setSearchResult ] = useState([])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchName={searchName}
        setSearchName={setSearchName}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        persons={persons}
      />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
      />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
