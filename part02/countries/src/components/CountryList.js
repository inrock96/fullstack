import Country from "./Country"
import Toggle from "./Toggle"
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
                        countrylist.map((country)=>{
                            if(countrylist.length===1){
                                return <Country key={country.name} bandera={countrylist.length} country={country}></Country>
                            }else{
                                return <Toggle key={country.name} country={country}></Toggle>
                            }
                            
                        })
                    }
                </ul>
        
        )
    }
}

export default CountryList