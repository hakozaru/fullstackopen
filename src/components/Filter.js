import React from 'react'

const Filter = (props) => {
  const {
    searchName,
    setSearchName,
    searchResult,
    setSearchResult,
    persons,
  } = props

  const runSearch = (e) => {
    e.preventDefault()
    if(!searchName) return

    const found = persons.filter(person => person.name.match(new RegExp(searchName, 'i')))
    if(found) setSearchResult(found)
    setSearchName('')
  }

  return(
    <>
      <form onSubmit={runSearch}>
        <div>
          filter shown with <input value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        </div>
        <div>
          <button type="submit">search</button>
        </div>
      </form>
      {searchResult.map(r => <div key={r.name}>{r.name} {r.number}</div>)}
    </>
  )
}

export default Filter
