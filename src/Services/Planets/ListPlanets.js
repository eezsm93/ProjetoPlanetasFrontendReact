
import api from './api.js'

export const listPlanets = () => {
    try{
        return api.get("/planetas")

    }catch(error){
        Response.reject(error)
    }  
    
}