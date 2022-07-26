
import api from '../Planets/api'

export const newUser = (
    username,
    email,
    password
    ) => {
    try{
        return api.post("/user", {
            username: username,
            email: email,
            password: password
        })

    }catch(error){
        Response.reject(error)
    }  
    
}