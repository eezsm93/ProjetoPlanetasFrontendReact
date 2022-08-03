import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div>
      <h1>VOCE NAO TEM ACESSO A ESSA PAGINA!</h1>
      <p>
        Deseja retornar para o Login?
        <br />
        <hr />
        <Link to="/">
          <button>IR PARA O LOGIN</button>
        </Link>
      </p>
    </div>
  );
};

export default AccessDenied;
