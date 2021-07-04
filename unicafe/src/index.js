import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const Display = props => <div>{props.value}</div>

const Statistics = (props) => {
  if (props.all !== 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>
          <table>
            <tbody>

              <Statistic text="good" value={props.good}></Statistic>
              <Statistic text="neutral" value={props.neutral}></Statistic>
              <Statistic text="bad" value={props.bad}></Statistic>
              <Statistic text="all" value={props.all}></Statistic>
              <Statistic text="average" value={props.average}></Statistic>
              <Statistic text="percent" value={props.positivePercent + "%"}></Statistic>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>No feedback given yet</h1>
    </div>
  )

}
const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td><Display value={props.value}></Display></td>
  </tr>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGood = nuevoValor => {
    setGood(nuevoValor)
    setAll(all + 1)
  }
  const addBad = nuevoValor => {
    setBad(nuevoValor)
    setAll(all + 1)
  }
  const addNeutral = nuevoValor => {
    setNeutral(nuevoValor)
    setAll(all + 1)
  }
  const average = () => {
    let positive = good
    let negative = bad * -1
    return (positive + negative) / all
  }
  const positivePercent = () => {
    return (good / all) * 100
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={() => addGood(good + 1)} text={"good"}></Button>
        <Button handleClick={() => addNeutral(neutral + 1)} text={"neutral"}></Button>
        <Button handleClick={() => addBad(bad + 1)} text={"bad"}></Button>
      </div>
      <Statistics good={good} bad={bad} all={all} neutral={neutral} average={average()} positivePercent={positivePercent()}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)