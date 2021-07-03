import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Button =(props)=>(
  <button onClick={props.handleClick}>{props.text}</button>
)
const Display = props => <div>{props.value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGood=nuevoValor =>{
    setGood(nuevoValor)
    setAll(all+1)
  }
  const addBad=nuevoValor =>{
    setBad(nuevoValor)
    setAll(all+1)
  }
  const addNeutral=nuevoValor =>{
    setNeutral(nuevoValor)
    setAll(all+1)
  }
  const average=()=>{
    let positive = good
    let negative = bad*-1
    return (positive+negative)/all
  }
  const positivePercent=()=>{
    return (good/all)*100
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={()=>addGood(good+1)} text={"good"}></Button>
        <Button handleClick={()=>addNeutral(neutral+1)} text={"neutral"}></Button>
        <Button handleClick={()=>addBad(bad+1)} text={"bad"}></Button>
      </div>
      <div>
        <h1>Statistics</h1>
        <div>
          <h2>good</h2><Display value={good}></Display>
          <h2>neutral</h2><Display value={neutral}></Display>
          <h2>bad</h2><Display value={bad}></Display>
          <h2>all</h2><Display value={all}></Display>
          <h2>average</h2><Display value={average()}></Display>
          <h2>positive</h2><Display value={positivePercent()+"%"}></Display>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)