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
        <Link to="/mon_portfolio">
          <span>1.</span> Accueil
        </Link>
        <Link to="/mon_portfolio/a-propos">
          <span>2.</span> À propos
        </Link>
        <Link to="/mon_portfolio/competences-formations">
          <span>3.</span> Compétences et formations
        </Link>
        <Link to="/mon_portfolio/projets">
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
