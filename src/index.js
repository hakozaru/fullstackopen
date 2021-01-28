import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handler}) => (
  <button onClick={handler}>{text}</button>
)

const Statistic = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
)

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad

  const calcAvg = () => {
    if(total === 0) return 0
    return (good - bad) / total
  }

  const calcPos = () => {
    if(total === 0) return 0
    return `${good / total} %`
  }

  if(total === 0) {
    return(
      <>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </>
    )
  } else {
    return(
      <>
        <h2>statistics</h2>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={calcAvg()} />
          <Statistic text="positive" value={calcPos()} />
        </table>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button text="good" handler={() => setGood(good + 1)} />
        <Button text="neutral" handler={() => setNeutral(neutral + 1)} />
        <Button text="bad" handler={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
