
import api from './api.js'

export const addPlanets = (
    name,
    image,
    description,
    surfaceArea,
    sunDistance,
    day,
    gravity,
    color,
    card_image
    ) => {
    try{
        return  api.post("/planetas", {
            name: name,
            image: image,
            description: description,
            surfaceArea: surfaceArea,
            sunDistance: sunDistance,
            day: day,
            gravity: gravity,
            color: color,
            card_image: card_image
        })

    }catch(error){
        Response.reject(error)
    }  
    
}