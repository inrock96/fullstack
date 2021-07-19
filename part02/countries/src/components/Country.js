const Country = ({ country, bandera }) => {
    if (bandera === 1) {
        return (
            <div>
                <h1>{country.name}</h1>
                <h3>Capital: {country.capital}</h3>
                <h3>Population: {country.population}</h3>
                <h3>Languages</h3>
                <ul>{country.languages.map(lang=>{
                    return <li>{lang.name}</li>
                })}</ul>
                <img  src={country.flag}
                    width={75}
                    height={60}
                    />
            </div>
        )
    } else {
        return (
            <li>{country.name}</li>
        )
    }
}

export default Country