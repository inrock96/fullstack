import Country from "./Country"
const CountryList = (props) => {
    
    const countrylist = props.countries
    if (props.countries.length > 10) {
        return (
            <div>
                <h3>Too many countries fetched</h3>
            </div>
        )
    } else {
        return (
                <ul>
                    {
                        countrylist.map(country=>{
                            return <Country key={country.name} bandera={countrylist.length} country={country}></Country>
                        })
                    }
                </ul>
        
        )
    }
}

export default CountryList