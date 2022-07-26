import React from 'react'
import styles from './AddNewPlanet.module.css'
import Data, {planets} from '../Data/Index.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../Header/Header.js';
import { Link, useLocation } from 'react-router-dom';
import api from '../../Services/Planets/api.js'
import { addPlanets } from '../../Services/Planets/AddPlanets';

const AddNewPlanet = () => {


  const[name, setName] = React.useState(null)
  const[image, setImage] = React.useState("Terra.png")
  const[surfaceArea, setSurfaceArea] = React.useState(null)
  const[sunDistance, setSunDistance] = React.useState(null)
  const[day, setDay] = React.useState(null)
  const[description, setDescription] = React.useState(null)
  const[gravity, setGravity] = React.useState(null)
  const[color, setColor] = React.useState("blue")
  const[card_image, setCardImage] = React.useState("Terra.png")



  function addNewPlanet(){
    addPlanets(name, image, description, surfaceArea, sunDistance, day, gravity, color, card_image)
    .then((response) => console.log(response))
    .catch((error) => console.error("ops! ocorreu um erro" + error))

    alert("Planeta Adicionado com Sucesso!");
  }




  return (
    <div>
      <Header/>
      <div>
        <div className={styles.container}>
          <div className={styles.planetImgContainer}>
            <ArrowBackIosIcon /> <p>Add Foto</p> <ArrowForwardIosIcon/>
          </div>
          <div className={styles.infoContainer}>
            <h2>Planeta</h2>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              <h4>Area de Superfice</h4>
              <h3>{surfaceArea}</h3>
            </div>
            <div className={styles.cards}>
              <h4>Distancia do Sol</h4>
              <h3>{sunDistance}</h3>
            </div>
            <div className={styles.cards}>
              <h4>Duracao do Dia</h4>
              <h3>{day}</h3>
            </div>
            <div className={styles.cards}>
              <h4>Gravidade</h4>
              <h3>{gravity}</h3>
            </div>
          </div>
          <div className={styles.addFormContainer}>
              <h2 className={styles.tittle}>Informe os Dados do Planeta</h2>
              <input className={styles.inputName} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Planeta"/>
              <input className={styles.inputArea} type="text" value={surfaceArea} onChange={(e) => setSurfaceArea(e.target.value)} placeholder="Área de superfície"/>
              <input className={styles.inputSunDistance}type="text" value={sunDistance} onChange={(e) => setSunDistance(e.target.value)} placeholder="Distância do sol"/>
              <input className={styles.inputDay}type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Duração do dia"/>
              <input className={styles.inputDescription} type="textArea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do planeta"/>
              <input className={styles.inputGravity} type="text" value={gravity} onChange={(e) => setGravity(e.target.value)} placeholder="Gravidade"/>
              <div className={styles.buttonContainer}>s
              <button className={styles.cancelButton}>Cancelar</button>
              <button onClick={() => addNewPlanet()} className={styles.sendButton}>Salvar</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewPlanet