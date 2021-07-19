
import './App.css';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [newFilter, setfilter] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries,setFilteredCountries]=useState([])
  useEffect(() => {
    console.log("Fetching countries")
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
      setCountries(response.data)
    })
  }, [])
  const handleFilterChange =(event)=>{
    console.log(event.target.value)
    setfilter(event.target.value)
    const countrylist = countries.filter(country=>{
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredCountries(countrylist)
  }
  return(
    <div>
      <h1>Country List</h1>
      <br></br>
      <Filter value={newFilter} handler={handleFilterChange} ></Filter>
      <div>
        <CountryList countries={filteredCountries}></CountryList>
      </div>
    </div>
  );
}

export default App;
