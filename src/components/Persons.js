import React from 'react'

const Persons = (props) => {
  const { persons } = props

  return(
    <>
      {persons.map((p) => {
        return(
          <div key={p.name}>{p.name} {p.number}</div>
        )
      })}
    </>
  )
}

export default Persons
