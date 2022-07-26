
import api from '../Planets/api'

export const authUser = (
    email,
    password
    ) => {
    try{
        return api.post("/auth", {
            email: email,
            password: password
        })

    }catch(error){
        Response.reject(error)
    }  
    
}