import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll=()=>{
    return axios.get(baseURL)
}

const create = newObject=>{
    return axios.post(baseURL,newObject)
}

const update = (id,newObject)=>{

}

const deletePerson = (id)=>{
    return axios.delete(`${baseURL}/${id}`)
}

const  personService={
    getAll:getAll,
    create:create,
    update:update,
    deletePerson:deletePerson
}

export default personService;