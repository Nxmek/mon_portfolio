import React from "react";
import mc from "./apple-card.module.scss";

const AppleCard = ({ children, title }) => {
  return (
    <div className={mc.card}>
      <div className={mc.tools}>
        <div className={mc.circle}>
          <span className={`${mc.red} ${mc.box}`}></span>
        </div>
        <div className={mc.circle}>
          <span className={`${mc.yellow} ${mc.box}`}></span>
        </div>
        <div className={mc.circle}>
          <span className={`${mc.green} ${mc.box}`}></span>
        </div>
      </div>
      <div className={mc.card__content}>
        <h3>{title}</h3>
        <p className={mc.pActuellement}>{children}</p>
      </div>
    </div>
  );
};

export default AppleCard;
