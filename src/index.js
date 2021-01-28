import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad

  const calcAvg = () => {
    if(total === 0) return 0
    return (good - bad) / total
  }

  const calcPos = () => {
    if(total === 0) return 0
    return good / total
  }

  return(
    <>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {calcAvg()}</div>
      <div>positive {calcPos()} %</div>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>netural</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
