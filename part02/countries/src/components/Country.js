import axios from 'axios'
import { useEffect, useState } from 'react'
const Country = ({ country, bandera }) => {
    const [weather, setweather] = useState({})
    const api_key = process.env.REACT_APP_API_KEY
    //'724903d0c4ff527a08e6d28598a649a8'
    const params = {
        access_key: api_key,
        query: country.name
    }
    useEffect(() => {
        console.log('fetching weather')
        axios
        .get('https://api.weatherstack.com/current',{params})
        .then(response=>{
            setweather(response.data)
        })
        .catch(error=>console.log(error))

    }, [])
    return (
        <div>
            <h1>{country.name}</h1>
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Languages</h3>
            <ul>{country.languages.map(lang => {
                return <li key={lang.name}>{lang.name}</li>
            })}</ul>
            <img src={country.flag}
                width={75}
                height={60}
                alt=''
            />
        </div>
    )
}

export default Country