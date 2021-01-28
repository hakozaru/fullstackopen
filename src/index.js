import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    Array.apply(null, {length: anecdotes.length}).map(_ => 0)
  )

  const updateAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const newPoint = [...points]
    newPoint[selected] += 1
    setPoints(newPoint)
  }

  const anecdote_most_vote = () => {
    const maximum_val = points.reduce(() => Math.max(...points))
    const most_votes_anecdote = anecdotes[points.indexOf(maximum_val)]
    return(
      <>
        <div>{most_votes_anecdote}</div>
        <div>has {maximum_val} votes</div>
      </>
    )
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br />
      has {points[selected]} votes<br />
      <button onClick={vote}>vote</button>
      <button onClick={updateAnecdotes}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdote_most_vote()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
