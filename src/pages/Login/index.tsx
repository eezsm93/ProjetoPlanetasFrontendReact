import React from "react";
import styles from "./UserLogin.module.css";
import Logo from "../../assets/images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { authUser } from "../../Services/User/AuthUser";

const Login = () => {
  return (
    <div>
      <h1>Login Planetas</h1>
    </div>
  );
};

export { Login };
