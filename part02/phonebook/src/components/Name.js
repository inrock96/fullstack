import personService from "../services/Person"

const Name = ({ person,deletePerson }) => {
  
    return (
      <li>{person.name} {person.number} <button onClick={deletePerson}>delete</button></li>
    )
  }

  export default Name