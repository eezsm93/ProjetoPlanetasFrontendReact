import React from "react";
import styles from "./PlanetsList.module.css";
import Header from "../Header/Header";
import { Link, useLocation } from "react-router-dom";
import PlanetsFilters from "./PlanetsFilters";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalDelete from "./ModalDelete.js";
import { listPlanets } from "../../Services/Planets/ListPlanets";
import { deletePlanets } from "../../Services/Planets/DeletePlanets";
import MaterialTable from "material-table";
import { DragDropContext } from "react-beautiful-dnd";

const PlanetsList = () => {
  const [planetsList, setPlanetsList] = React.useState(null);
  const [filtaredPlanets, setFiltaredPlanets] = React.useState(planetsList);
  const [planetModal, setPlanetModal] = React.useState(null);
  const [planetIndex, setPlanetIndex] = React.useState(null);
  const [planetId, setPlanetId] = React.useState(null);
  const [name, setName] = React.useState(0);
  const [maiorMenor, setMaiorMenor] = React.useState(null);
  const [filterType, setFilterType] = React.useState(null);

  const takeName = (e) => setName(e.target.value);
  const takeMaiorMenor = (e) => setMaiorMenor(e.target.value);
  const takeFilterType = (e) => setFilterType(e.target.value);

  React.useEffect(() => {
    listPlanets()
      .then((response) => setPlanetsList(response.data.planets))
      .catch((error) => console.error("ops! ocorreu um erro" + error));

    listPlanets()
      .then((response) => setFiltaredPlanets(response.data.planets))
      .catch((error) => console.error("ops! ocorreu um erro" + error));
  }, []);

  let location = useLocation();
  location = location.pathname;

  window.localStorage.setItem("id", planetId);
  window.localStorage.setItem("index", planetIndex);

  function filterPlanets() {
    let filterPlanetsAux = planetsList;

    if (name.length > 0) {
      filterPlanetsAux = planetsList.filter(function (planet) {
        return planet.name.toUpperCase().includes(name.toUpperCase());
      });
    } else {
      filterPlanetsAux = planetsList;
    }

    if (maiorMenor != null && maiorMenor === "maior") {
      console.log("entrei no segundo if");
      setFiltaredPlanets(
        filterPlanetsAux.sort((a, b) => b[filterType] - a[filterType])
      );
    } else {
      console.log("entrei no segundo else");
      setFiltaredPlanets(
        filterPlanetsAux.sort((a, b) => a[filterType] - b[filterType])
      );
    }
  }

  const removePlanet = async () => {
    let id = planetModal;

    await deletePlanets(id)
      .then((response) => console.log(response))
      .catch((error) => console.error("ops! ocorreu um erro" + error));

    await listPlanets()
      .then((response) => setFiltaredPlanets(response.data.planets))
      .catch((error) => console.error("ops! ocorreu um erro" + error));
  };

  return (
    <div className={styles.background}>
      <div className={styles.stars}>
        <div className={styles.twinkling}>
          <div className={styles.clouds}>
            <Header />
            <div className={styles.pathNameContainer}>
              <ArrowBackIosOutlinedIcon />{" "}
              <h1 className={styles.pathName}>
                <Link to="/">Home</Link>
                {location}
              </h1>
            </div>
            <PlanetsFilters
              filterPlanets={filterPlanets}
              takeName={takeName}
              takeMaiorMenor={takeMaiorMenor}
              takeFilterType={takeFilterType}
            />
            <div className={styles.container}>
              <Link to="/planetas/adicionar">
                <div className={styles.addNewPlanetCard}>
                  <AddCircleOutlineIcon />
                  <p>Adicionar</p>
                </div>
              </Link>
              {filtaredPlanets &&
                filtaredPlanets.map((planet, index) => (
                  <div key={index} className={styles.planetCards}>
                    <img
                      alt="planetas"
                      className={styles.planetImg}
                      src={require(`../../assets/halfplanets/${planet.image}`)}
                    />
                    <div className={styles.namePlanetContainer}>
                      <div>
                        <p>{planet.name}</p>
                      </div>
                      <div className={styles.iconsPlanetContainer}>
                        <DeleteOutlineIcon
                          onClick={() => {
                            setPlanetModal(filtaredPlanets[index].id);
                            setPlanetIndex(index);
                          }}
                          className={styles.treshIcon}
                        />{" "}
                        <Link className={styles.arrow} to="/planetas/explorar">
                          <ArrowForwardIcon
                            className={styles.arrow}
                            onMouseOver={() => {
                              setPlanetId(filtaredPlanets[index].id);
                              setPlanetIndex(index);
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div style={{ maxWidth: "75rem" , margin: "0 auto", border: "2px solid #CDCDCD", borderRadius: "6px"}}>
              {filtaredPlanets && (
                <MaterialTable style={{  background: "#2A2A2A4D", fontFamily: "Roboto, sans-serif" ,  padding: "2.5rem 5rem 2.5rem 5rem", h1:"red" }}
                  title="Tabela Comparativa"
                  columns={[
                    { title: "Planeta", field: "name"},
                    { title: "Area de Superficie", field: "surfaceArea" },
                    { title: "Distancia do Sol", field: "sunDistance" },
                    { title: "Duracao do dia", field: "day" },
                    { title: "Gravidade", field: "gravity" },
                  ]}
                  data={filtaredPlanets}
                  options={{
                    filtering:true,
                    search: false,
                    paging: false,
                    MuiInputBaseInput:{
                        color: "#CDCDCD",
                    },
                    headerStyle: {
                      backgroundColor: "#CDCDCD",
                      color: "#334B48",
                      fontSize: "1rem",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    },
                    table:{
                      backgroundColor: "#CDCDCD",
                    },
                    rowStyle:{
                      background: "#2A2A2A4D",
                      color: "#CDCDCD",
                    },
                    searchFieldStyle: { 
                      color: "#CDCDCD",
                    },
                    tittle: {
                      color: "#CDCDCD",
                    },
                  
                  }
                }
                />
              )}
              
            </div>
          </div>
        </div>
        {planetModal != null && (
          <ModalDelete
            removePlanet={removePlanet}
            closeModal={() => setPlanetModal(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PlanetsList;
