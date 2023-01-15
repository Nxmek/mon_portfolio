import React from "react";
import { Link } from "react-router-dom";
import mc from "./nav-bar.module.scss";
import logo from "../../../img/logo.svg";
import Buttons from "../button/Button";

const NavBar = () => {
  return (
    <nav className={mc.container}>
      <Link to="/">
        <div className={`adaptive-img-contain ${mc.logo}`}>
          <span>
            <img src={logo} alt="Logo" />
          </span>
        </div>
      </Link>

      <div className={mc.menu}>
        {" "}
        <Link to="/">
          <span>1.</span> Accueil
        </Link>
        <Link to="/a-propos">
          <span>2.</span> À propos
        </Link>
        <Link to="/competences-formations">
          <span>3.</span> Compétences et formation
        </Link>
        <Link to="/projets">
          <span>4.</span> Mes projets
        </Link>
        <div className={mc.btn}>
          <Buttons textBtn={"CV"} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
