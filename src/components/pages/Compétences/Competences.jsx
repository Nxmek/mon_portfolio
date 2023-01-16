import React from "react";
import AppleCard from "../../global/appleCard/AppleCard";
import mc from "./competences.module.scss";
/*-----------------Photo-------------------------- */
import vsCode from "../../../img/h_skills/vscode.png";
import Html from "../../../img/h_skills/css.png";
import javascript from "../../../img/h_skills/js.png";
import react from "../../../img/h_skills/React.png";
import node from "../../../img/h_skills/node.png";
import mongo from "../../../img/h_skills/mongo.png";
import adobe from "../../../img/h_skills/adobe.png";
import wp from "../../../img/h_skills/wp.png";
import ux from "../../../img/h_skills/UXlogo.png";
/*----------------- fin Photo-----------------------*/

const Competences = () => {
  return (
    <main className={mc.container}>
      <h1>
        <span>2.</span> Compétences
      </h1>
      <div className={mc.skills}>
        <div className={mc.left}>
          <AppleCard title={"HardSkills"}>
            <div className={mc.all_skills}>
              <div className={mc.skillsLeft}>
                <div className={mc.html_css}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={Html} alt="" />
                    </span>
                  </div>
                  <p>Html/CSS</p>
                </div>
                <div className={mc.javascript}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={javascript} alt="" />
                    </span>
                  </div>
                  <p>Javascript</p>
                </div>
                <div className={mc.react}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={react} alt="" />
                    </span>
                  </div>
                  <p>React.Js</p>
                </div>
                <div className={mc.node}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={node} alt="" />
                    </span>
                  </div>
                  <p>Node.Js</p>
                </div>
                <div className={mc.mongodb}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={mongo} alt="" />
                    </span>
                  </div>
                  <p>MongoDb</p>
                </div>
              </div>
              <div className={mc.skillsRight}>
                <div className={mc.adobe}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={adobe} alt="" />
                    </span>
                  </div>
                  <p>Suite Adobe</p>
                </div>
                <div className={mc.wordPress}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={wp} alt="" />
                    </span>
                  </div>
                  <p>WordPress</p>
                </div>
                <div className={mc.ui_ux}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={ux} alt="" />
                    </span>
                  </div>
                  <p>UI/UX design</p>
                </div>
                <div className={mc.vsCode}>
                  <div className={`adaptive-img-contain ${mc.logo}`}>
                    <span>
                      <img src={vsCode} alt="" />
                    </span>
                  </div>
                  <p>VsCode</p>
                </div>
              </div>
            </div>
          </AppleCard>
        </div>
        <div className={mc.right}>
          <AppleCard title={"SoftSkills"}>
            <div className={mc.all_skills}>
              <div className={mc.skillsLeft}>
                <div className={mc.perseverance}>
                  <p className={mc.emoji}>⏳</p>
                  <p>Persévérance</p>
                </div>
                <div className={mc.curiosité}>
                  <p className={mc.emoji}>🔎</p>
                  <p>Curiosité</p>
                </div>
                <div className={mc.team}>
                  <p className={mc.emoji}>🤝</p>
                  <p>Travail d'équipe</p>
                </div>
              </div>
              <div className={mc.skillsRight}>
                <div className={mc.creative}>
                  <p className={mc.emoji}>🎨</p>
                  <p>Créativité</p>
                </div>
                <div className={mc.react}>
                  <p className={mc.emoji}>♻️</p>
                  <p>Adaptabilité</p>
                </div>
              </div>
            </div>
          </AppleCard>
        </div>
      </div>
    </main>
  );
};

export default Competences;
/*
HTML / CSS / SASS
JAVASCRIPT
REACT.JS
nodeJs
mongodb


Suite adobe
wordpress
UX/UI design
vsCode
*/
