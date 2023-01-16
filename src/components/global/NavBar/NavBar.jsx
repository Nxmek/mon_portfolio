import React from "react";
import { Link } from "react-router-dom";
import mc from "./nav-bar.module.scss";
import logo from "../../../img/logo.svg";
import Buttons from "../button/Button";

const NavBar = () => {
  return (
    <nav className={mc.container}>
      <Link to="/mon_portfolio">
        <div className={`adaptive-img-contain ${mc.logo}`}>
          <span>
            <img src={logo} alt="Logo" />
          </span>
        </div>
      </Link>

      <div className={mc.menu}>
        {" "}
        <Link to="/mon_portfolio">
          <span>#.</span> Accueil
        </Link>
        <Link to="/mon_portfolio/qui_suis_je">
          <span>1.</span> Qui sui-je?
        </Link>
        <Link to="/mon_portfolio/competences">
          <span>2.</span> Compétences
        </Link>
        <Link to="/mon_portfolio/formations">
          <span>3.</span> Formations
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
