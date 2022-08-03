import React from "react";
import { planets } from "../Data/Index.js";
import styles from "./UserLogin.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { authUser } from "../../Services/User/AuthUser";

const Login = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  function handleSubmit() {
    authUser(email, password)
      .then((response) => console.log(response))
      .catch((error) => console.error("ops! ocorreu um erro" + error));
  }

  console.log(email);
  console.log(password);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="e-mail"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <a href="/">Esqueci minha senha</a>
          <Link to="/cadastrar">
            <a href="/">Usuario Novo? Cadastre-se!</a>
          </Link>
          <Link to="/">
            <button onClick={handleSubmit}>entrar</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <img src={Logo} />
          <h2>
            Faca seu Login
            <br /> na plataforma
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
