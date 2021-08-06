import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Name from './components/Name'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import personService from './services/Person'
import Message from './components/Message'
const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [errorMsg, setError] = useState(null)
  const [successMsg, setSuccess] = useState(null)
  useEffect(() => {
    console.log('effect')
    personService.getAll()
      .then(response => {
        console.log(response)
        setPersons(response.data)
        setFilteredPersons(response.data)
      }).catch(error => {
        setError(
          `Error at getall ${error}`
        )
        setTimeout(() => {
          setError(null)
        }, 5000)
      })

  }, [])

  const deletePerson = async (id) => {
    if (window.confirm("Do you really want to delete?")) {
      personService.deletePerson(id)
        .then(response => {
          const index = persons.filter(element => element.id !== id)
          setPersons(index)
          setFilteredPersons(index)
        })
        .catch(error => {
          setError(
            `Error at deletePerson ${error}`
          )
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
    }
  }

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
      personService.create(newPerson)
        .then(response => {
          console.log(response.data)
          const test = persons.concat(response.data)
          setPersons(test)
          setFilteredPersons(test)
          setFilter('')
          setNewName('')
          setNewNumber('')
          setSuccess(
            `Person added succesfully`
          )
          setTimeout(() => {
            setSuccess(null)
          }, 5000)
        })
    }
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
    if (event.target.value !== '') {
      const filtered = persons.filter(person => {
        return person.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setFilteredPersons(filtered)
    } else {
      setFilteredPersons(persons)
    }
  }
  return (
    <div>
      <Message error={errorMsg} success={successMsg} ></Message>
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
          filteredPersons.map((person) => <Name key={person.name} deletePerson={() => deletePerson(person.id)} person={person}></Name>)
        }
      </ul>
    </div>
  )
}

export default App
