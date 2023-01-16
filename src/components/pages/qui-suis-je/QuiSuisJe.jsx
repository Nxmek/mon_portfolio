import React from "react";
import mc from "./qui-suis-je.module.scss";
import pdp from "../../../img/global/photo.jpg";

const QuiSuisJe = () => {
  return (
    <main className={mc.container}>
      <div className={mc.left}>
        <h1>
          <span>1.</span> Qui suis-je?
        </h1>
        <div className={mc.p_container}>
          <p>
            Comme vous l’avez lu, je suis <span>Valentin Laveau</span>, futur
            développeur web. J’ai toujours aimé le domaine du web, j’ai commencé
            par apprendre à utiliser <span>HTML/CSS en 2017</span> au début de
            mon cursus post BAC. J’ai par la suite appris à me servir de
            WordPress tout en continuant mes études !
          </p>
          <p>
            Après avoir obtenu mon Mastère en Stratégie Digitale, j’ai décidé de
            commencer une formation afin d’
            <span>
              en apprendre plus sur les différences languages et Frameworks du
              web
            </span>
          </p>
        </div>
      </div>
      <div className={mc.right}>
        <div className={`adaptive-img-cover ${mc.pdp}`}>
          <span>
            <img src={pdp} alt="" />
          </span>
        </div>
      </div>
    </main>
  );
};

export default QuiSuisJe;
