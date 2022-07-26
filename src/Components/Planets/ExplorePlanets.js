import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './ExplorePlanets.module.css';
import Header from '../Header/Header.js';
import Data, { planets } from '../Data/Index.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { listPlanets } from '../../Services/Planets/ListPlanets';
import { editPlanets } from '../../Services/Planets/EditPlanets';

const ExplorePlanets = () => {

  let index = Number(window.localStorage.getItem("index"))
  let planetId = window.localStorage.getItem("id")

  const [indexPlanet, setIndexPlanet] = React.useState(index);
  const [id, setIdPlanet] = React.useState(planetId);
  const [planetsList, setPlanetsList] = React.useState(null);

  const [name, setName] = React.useState()
  const [surfaceArea, setSurfaceArea] = React.useState()
  const [sunDistance, setSunDistance] = React.useState()
  const [day, setDay] = React.useState()
  const [description, setDescription] = React.useState()
  const [gravity, setGravity] = React.useState()
  const [color, setColor] = React.useState("blue")
  const [card_image, setCardImage] = React.useState("Terra.png")


  React.useEffect(() => {
    listPlanets()
      .then((response) => setPlanetsList(response.data.planets))
      .catch((error) => console.error("ops! ocorreu um erro" + error));
  }, [])


  const editPlanet = async () => {

    await editPlanets(id, name, surfaceArea, sunDistance, card_image, description, gravity, color)
      .then((response) => console.log(response))
      .catch((error) => console.error("ops! ocorreu um erro" + error))

    await listPlanets()
      .then((response) => setPlanetsList(response.data.planets))
      .catch((error) => console.error("ops! ocorreu um erro" + error));

    alert("Planeta Editado com Sucesso!")

  }

  return (
    <div>
      <div className={styles.stars}>
        <div className={styles.twinkling}>
          <div className={styles.clouds}>
            <Header />
            {planetsList &&
              <div>
                <div className={styles.container}>
                  <div className={styles.planetImgContainer}>
                    <ArrowBackIosIcon onClick={() => indexPlanet > 0 ? setIndexPlanet(indexPlanet - 1) : setIndexPlanet(planetsList.length - 1)} /> <img className={styles.planetImg} alt="planetas" src={require(`../../assets/planets/${planetsList[indexPlanet].image}`)} /> <ArrowForwardIosIcon onClick={() => indexPlanet < planetsList.length - 1 ? setIndexPlanet(indexPlanet + 1) : setIndexPlanet(0)} />
                  </div>
                  <div className={styles.infoContainer}>
                    <h2>Planeta</h2>
                    <h1>{planetsList[indexPlanet].name}</h1>
                    <p>{planetsList[indexPlanet].description}</p>
                  </div>
                  <div className={styles.cardsContainer}>
                    <div className={styles.cards}>
                      <h4>Area de Superfice</h4>
                      <h3>{planetsList[indexPlanet].surfaceArea}</h3>
                    </div>
                    <div className={styles.cards}>
                      <h4>Distancia do Sol</h4>
                      <h3>{planetsList[indexPlanet].sunDistance}</h3>
                    </div>
                    <div className={styles.cards}>
                      <h4>Duracao do Dia</h4>
                      <h3>{planetsList[indexPlanet].day}</h3>
                    </div>
                    <div className={styles.cards}>
                      <h4>Gravidade</h4>
                      <h3>{planetsList[indexPlanet].gravity}</h3>
                    </div>
                  </div>
                  <div className={styles.addFormContainer}>
                    <h2 className={styles.tittle}>Editar Planeta</h2>
                    <input className={styles.inputName} type="text" placeholder={planetsList[indexPlanet].name} value={name} onChange={(e) => setName(e.target.value)} />
                    <input className={styles.inputArea} type="text" placeholder={planetsList[indexPlanet].surfaceArea} value={surfaceArea} onChange={(e) => setSurfaceArea(e.target.value)} />
                    <input className={styles.inputSunDistance} type="text" placeholder={planetsList[indexPlanet].sunDistance} value={sunDistance} onChange={(e) => setSunDistance(e.target.value)} />
                    <input className={styles.inputDay} type="text" placeholder={planetsList[indexPlanet].day} value={day} onChange={(e) => setDay(e.target.value)} />
                    <input className={styles.inputDescription} type="textArea" placeholder={planetsList[indexPlanet].description} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input className={styles.inputGravity} type="text" placeholder={planetsList[indexPlanet].gravity} value={gravity} onChange={(e) => setGravity(e.target.value)} />
                    <div className={styles.buttonContainer}>
                      <button className={styles.cancelButton}>Cancelar</button>
                      <button onClick={() => editPlanet()} className={styles.sendButton}>Salvar</button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePlanets