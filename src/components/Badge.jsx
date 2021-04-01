import React from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

const Badge = (props) => {
  //render(){
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name ">
        <img className="Badge__avatar " src="" alt="Avatar" />
        <h1>
          {props.firstName} <br /> {props.lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>Hola</div>
      </div>

        <div className="Badge__footer">#Nietsnie-beep

        </div>

    </div>
  );
  //}
};

export default Badge;
