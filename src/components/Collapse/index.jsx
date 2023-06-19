import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow_down from "./../../assets/arrow_down.svg";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height + 25);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className="collapser">
      <div>
        <button
          className="collaps-button"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <h3 className="title">{title}</h3>
          {!isOpen ? (
            <img
              src={arrow_down}
              alt="bouton fermer"
              className={`arrow down`}
            />
          ) : (
            <img src={arrow_down} alt="bouton ouvrir" className={`arrow up`} />
          )}
        </button>
      </div>
      <div className={`text ${isOpen}`} style={{ height }}>
        <div ref={ref}>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
