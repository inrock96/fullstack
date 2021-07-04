import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(6));
  const handleSelectClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVoteClick=()=>{
    const copy ={ ...points}
    const copy2 = points
    copy[selected]+=1
    copy2[selected]+=1
    console.log(copy,copy2)
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      {props.anecdotes[selected]}
      <br></br>
      <br />
      has {points[selected]} points
      <br />
      <Button text="next" handleClick={handleSelectClick}></Button>
      <Button text="vote" handleClick={handleVoteClick}></Button>
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