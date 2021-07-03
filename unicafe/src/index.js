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

  const addGood=nuevoValor =>{
    setGood(nuevoValor)
  }
  const addBad=nuevoValor =>{
    setBad(nuevoValor)
  }
  const addNeutral=nuevoValor =>{
    setNeutral(nuevoValor)
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
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)