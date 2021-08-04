import { useState } from "react"
import Country from "./Country"
const Toggle = ({country}) => {
    const [toggle, settoggle] = useState("off")
    const [but, setbut] = useState("show")
    const change=()=>{
        settoggle(toggle==="off"?"on":"off")
        setbut(but==="show"?"hide":"show")
    }
    if(toggle==="on"){
        return(<div><Country key={country.name} bandera={0} country={country}></Country><button onClick={change}>{but}</button></div>)
    }else{
        return(<div><li>{country.name}</li><button onClick={change}>{but}</button></div>)
    }
}

export default Toggle