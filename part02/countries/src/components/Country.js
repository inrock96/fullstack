import axios from 'axios'
import { useEffect, useState } from 'react'
const Country = ({ country, bandera }) => {
    const [weather, setweather] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const api_key = process.env.REACT_APP_API_KEY
    const params = {
        access_key: api_key,
        query: country.capital
    }
    useEffect(() => {
        async function fetchMyApi(){
            const response= await axios
            .get('http://api.weatherstack.com/current', { params })
            let currentWeather = await response.data
            setweather(currentWeather)
            setIsLoading(false)
        }
        fetchMyApi()
    }, [])
    if(isLoading){
        return <div>Loading ...
        </div>
    }
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
            <h3>Weather in {country.capital}</h3>
            <h2>Current temperature in {weather.location.name} is {weather.current.temperature}℃</h2>
            <img src={weather.current.weather_icons[0]}
                width={75}
                height={60}
                alt=''
            />
        </div>
            )
}

            export default Country