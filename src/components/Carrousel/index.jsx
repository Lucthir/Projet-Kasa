import { useState } from "react";
import arrow_left from "./../../assets/arrow_left.svg";
import arrow_right from "./../../assets/arrow_right.svg";

function Carrousel({ pictures, id }) {
  //   console.log(pictures);

  const [index, setIndex] = useState(0);
  const length = pictures.length;

  function prevImage() {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  }

  function nextImage() {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  }

  return (
    <div className="carrousel">
      {length !== 1 ? (
        <div>
          <button
            onClick={() => prevImage()}
            className="carrousel-nav"
            id="prev"
          >
            <img src={arrow_left} className="arrow" alt="previous button" />
          </button>
          <button
            onClick={() => nextImage()}
            className="carrousel-nav"
            id="next"
          >
            <img src={arrow_right} className="arrow" alt="next button" />
          </button>
          <p id="num">
            {index + 1}/{length}
          </p>
        </div>
      ) : null}

      {pictures.map((picture, picindex) => {
        return (
          picindex === index && (
            <img
              className="carrouselpic"
              src={picture}
              alt={`photographie ${picindex + 1} du logement`}
              key={`${id}  ${picindex}`}
            />
          )
        );
      })}
    </div>
  );
}

export default Carrousel;
