import React from "react";
import { useState } from "react";
import arrow_down from "./../../assets/arrow_down.svg";
import arrow_up from "./../../assets/arrow_up.svg";

function Collapse({ title, text, width, margin_left }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div
      className="collapser"
      style={{ width: `${width}`, marginLeft: `${margin_left}` }}
    >
      <button className="collaps-button" onClick={() => setIsOpen(false)}>
        <h3 className="title">{title}</h3>
        <img src={arrow_up} alt="bouton fermer" className="arrow" />
      </button>

      <div className="text">{text}</div>
    </div>
  ) : (
    <div
      className="collapser"
      style={{ width: `${width}`, marginLeft: `${margin_left}` }}
    >
      <button className="collaps-button" onClick={() => setIsOpen(true)}>
        <h3 className="title">{title}</h3>
        <img src={arrow_down} alt="bouton ouvrir" className="arrow" />
      </button>
    </div>
  );
}

export default Collapse;
