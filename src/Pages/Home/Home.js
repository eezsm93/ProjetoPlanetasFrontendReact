import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import styles from './Home.module.css'
import Planet from '../../assets/images/Vector.svg'
import Asteroid from '../../assets/images/Vector-1.svg'
import Stars from '../../assets/images/Vector-2.svg'
import Galax from '../../assets/images/Vector-3.svg'



const Home = () => {
  return (
    <div className={styles.background}>
        <Header/>
        <div className={styles.container}>
            <div className={styles.upBox}>
                <h1>Sua jornada para desvendar o<br/> espaco comeca aqui!</h1>
                <h4>planetas e galaxias inteiras aguardam para serem exploradas.</h4>
                <p>O que vamos explorar hoje?</p>
            </div>
            <div className={styles.footerBox}>
              <div className={styles.footerCards}>
                <img src={Planet}/>
                <Link to="/planetas"><p>Planetas</p></Link>
              </div>
              <div className={styles.footerCards}>
                <img src={Asteroid}/>
                <Link to="/planetas"><p>Asteroides</p></Link>
              </div>
              <div className={styles.footerCards}>
                <img src={Stars}/>
                <Link to="/planetas"><p>Estrelas</p></Link>
              </div>
              <div className={styles.footerCards}>
                <img src={Galax}/>
                <Link to="/planetas"><p>Galáxias</p></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home