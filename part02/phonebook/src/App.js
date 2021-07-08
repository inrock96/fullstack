import React, { useState } from 'react'
import Name from './components/Name'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const handleAdd = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((person) => <Name key={person.name} person={person}></Name>)
        }
      </ul>
    </div>
  )
}

export default App
