import React from "react";
import Buttons from "../../global/button/Button";
import mc from "./home.module.scss";
import arrowDown from "../../../img/global/arrowDown.svg";
import AppleCard from "../../global/appleCard/AppleCard";

const Home = () => {
  return (
    <>
      <main className={mc.container}>
        <div className={mc.first}>
          <div>
            <p className={mc.je_suis}>Salut, je suis </p>
          </div>
          <div className={mc.sizeAnim}>
            <div className={mc.typewriter}>
              <h1 className={mc.name}> Valentin Laveau.</h1>
            </div>
            <h2>Futur développeur Web</h2>
          </div>
          <div>
            <p className={mc.stage}>
              Actuellement en formation, je suis a la recherche d’un stage d’un
              mois <span>du 20 février au 21 mars</span> dans une entreprise qui
              pourras m’aider à m’améliorer!{" "}
            </p>
          </div>
          <Buttons className={mc.button} textBtn={"Voir mon CV"} />
          <div className={mc.arrowDiv}>
            <p>N'oublie pas de scroller</p>
            <div className={`adaptive-img-contain ${mc.arrowDown}`}>
              <span>
                <img src={arrowDown} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className={mc.second}>
          <AppleCard title={"Actuellement"}>
            En formation, je suis depuis septembre dernier la formation de
            développeur fullstack (orienté JavaScript) à la{" "}
            <a href="https://3wa.fr/">3W Academy</a>. Je recherche en février
            une entreprise qui pourra m’accueillir lors d’un stage d’un mois
            (gratuit et conventionné par Pôle emploi). Pour m’améliorer, je
            pense que rien ne vaut une expérience auprès de développeurs
            confirmés ! J’ai soif d’apprendre et les dédis ne me font pas peur !
            Si vous voulez en savoir plus, que ce soit sur mes compétences ou
            mes premiers projets, je vous invite à parcourir mon site ! Et si
            vous avez des questions, n’hésitez pas à me contacter
          </AppleCard>
        </div>
      </main>
    </>
  );
};

export default Home;
