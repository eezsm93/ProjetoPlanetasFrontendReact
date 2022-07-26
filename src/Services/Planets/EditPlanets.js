
import api from './api.js'

export const editPlanets = (
    id,
    name,
    surfaceArea,
    sunDistance,
    day,
    gravity,
    description,
    color,
    image,
    card_image
    ) => {
    try{
        return  api.put(`/planetas/${id}`, {
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