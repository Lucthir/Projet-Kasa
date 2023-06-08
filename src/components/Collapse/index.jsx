import React from "react";
import { useState } from "react";
import arrow_down from "./../../assets/arrow_down.svg";
import arrow_up from "./../../assets/arrow_up.svg";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapser">
      <button
        className="collaps-button"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <h3 className="title">{title}</h3>
        <img src={arrow_down} alt="bouton fermer" className="arrow" />
      </button>

      <div className="text">{text}</div>
    </div>
  ) : (
    <div className="collapser">
      <button
        className="collaps-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <h3 className="title">{title}</h3>
        <img src={arrow_up} alt="bouton ouvrir" className="arrow" />
        <div className="text" style={{ display: "none" }}>
          {text}
        </div>
      </button>
    </div>
  );
}

export default Collapse;
