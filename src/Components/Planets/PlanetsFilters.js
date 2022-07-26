import React from 'react'
import styles from './PlanetsFilters.module.css'

const PlanetsFilters = ({filterName, filterPlanets, takeName, takeMaiorMenor, takeFilterType}) => {


  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <h1>Filtrar planetas</h1>
          <div className={styles.filters}>
              <input onChange={takeName} type="text" placeholder="Pesquisar planeta..."/>
              <select onChange={takeFilterType}>
                  <option selected disabled>Selecione um filtro</option>
                  <option value="surfaceArea">Area de Superfice</option>
                  <option value="sunDistance">Distancia do Sol</option>
                  <option value="durationDay">Duracao do Dia</option>
                  <option value="gravity">Gravidade</option>
              </select>
              <select onChange={takeMaiorMenor}>
                  <option selected disabled>Selecione</option>
                  <option value="maior">Filtrar do maior ao menor</option>
                  <option value="menor">Filtrar do menor ao maior</option>
              </select>
              <button onClick={filterPlanets}>Filtrar</button>
          </div>
        </div>
    </div>
  )
}

export default PlanetsFilters