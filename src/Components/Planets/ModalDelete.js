import React from 'react'
import styles from './ModalDelete.module.css'
import api from '../../Services/Planets/api'

const ModalDelete = ({closeModal, removePlanet}) => {

    const[planetsList, setPlanetsList] = React.useState()
    let indexPlanet = window.localStorage.getItem("index")

    React.useEffect(() => {
        api
          .get("/planetas")
          .then((response) => setPlanetsList(response.data))
          .catch((err) => console.error("ops! ocorreu um erro" + err));
      });


  return (
    <div className={`${styles.modalBack}`}>  
        <div className={`${styles.modalContainer}`}>
            <div className={styles.planetBg}>
            </div>
            <div className={`${styles.modal}`}>
                <h1>Tem certeza?</h1>
                <p>Ao pressionar em <strong>deletar</strong> todos os dados desse planeta serão apagados dos<br/> sistemas <strong>permanentemente!</strong> Deseja apagar todos os dados?</p>
                <div className={styles.buttonsContainer}>
                    <button className={styles.buttonCancel} onClick={closeModal}>Voltar</button>
                    <button className={styles.buttonDelete} onClick={() => {removePlanet(); closeModal()}}>Deletar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalDelete