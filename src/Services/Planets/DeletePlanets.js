
import api from './api.js'

export const deletePlanets = (id) => {
    try{
        return  api.delete(`/planetas/${id}`)

    }catch(error){
        Response.reject(error)
    }  
    
}