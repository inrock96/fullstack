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
    let yaExiste = false;
  
    for(let i=0;i<persons.length;i++){
      if(persons[i].name===newName){
        yaExiste=true
        break
      }
    }
    if(yaExiste){
      console.log("exists",yaExiste)
      window.alert(`${newName} already exists`)
    }else{
      console.log("not exists")
      setPersons(persons.concat(newPerson))
      console.log(persons)
    }
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
