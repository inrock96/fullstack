import React, { useState } from 'react'
import Filter from './components/Filter'
import Name from './components/Name'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
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
      phone: newNumber
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
