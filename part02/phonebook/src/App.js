import React, { useState,useEffect } from 'react'
import Filter from './components/Filter'
import Name from './components/Name'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  useEffect(()=>{
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      console.log(response)
      setPersons(response.data)
      setFilteredPersons(response.data)
    })
    
  },[])

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleAdd = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }
    let yaExiste = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        yaExiste = true
        break
      }
    }
    if (yaExiste) {
      console.log("exists", yaExiste)
      window.alert(`${newName} already exists`)
    } else {
      console.log("not exists")
      setPersons(persons.concat(newPerson))
      console.log(persons)
    }
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
    if (newFilter !== '') {
      const filtered = persons.filter(person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
      })
      setFilteredPersons(filtered)
    } else {
      setFilteredPersons(persons)
    }
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newName={newFilter} handleChange={handleFilter}></Filter>
      <h2> Add new </h2>
      <PersonForm handleSubmit={handleAdd}
        handleNumber={handleNumber}
        handleName={handleChange}
        name={newName}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <ul>
        {
          filteredPersons.map((person) => <Name key={person.name} person={person}></Name>)
        }
      </ul>
    </div>
  )
}

export default App
