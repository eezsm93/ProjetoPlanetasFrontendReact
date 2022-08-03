import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Logo.png";
import Person from "../../assets/images/person.png";
import Arrow from "../../assets/images/Arrow.png";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={Logo} />
        </Link>
      </div>
      <div className={styles.user}>
        <p>
          <PersonIcon />
          Usuario
          <KeyboardArrowDownIcon />
        </p>
      </div>
    </div>
  );
};

export { Header };
