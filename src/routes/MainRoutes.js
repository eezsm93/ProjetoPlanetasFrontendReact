import React from 'react'
import Login from '../Pages/Login/Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import Planets from '../Pages/Planets/Planets';
import Explore from '../Pages/ExplorePlanets/Explore';
import NewPlanet from '../Pages/NewPlanet/NewPlanet.js';
import Register from '../Pages/Register/Register.js';

const MainRoutes = () => {
  return (
    <div> 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/planetas" element={<Planets/>}/>
            <Route path="/planetas/explorar" element={<Explore/>}/>
            <Route path="/planetas/adicionar" element={<NewPlanet/>}/>
            <Route path="/cadastrar" element={<Register/>}/>
        </Routes>
    </BrowserRouter></div>
  )
}

export default MainRoutes