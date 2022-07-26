
import Login from './Pages/Login/Login.js'
import { PlanetsList } from './Components/Planets/PlanetsList.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Planets from './Pages/Planets/Planets';
import Explore from './Pages/ExplorePlanets/Explore';
import NewPlanet from './Pages/NewPlanet/NewPlanet.js';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/planetas" element={<Planets/>}/>
        <Route path="/planetas/explorar" element={<Explore/>}/>
        <Route path="/planetas/adicionar" element={<NewPlanet/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
