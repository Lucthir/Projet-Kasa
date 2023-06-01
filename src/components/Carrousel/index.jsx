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
      <button onClick={() => prevImage()} className="carrousel-nav" id="prev">
        <img src={arrow_left} className="arrow" alt="previous button" />
      </button>
      <button onClick={() => nextImage()} className="carrousel-nav" id="next">
        <img src={arrow_right} alt="next button" />
      </button>
      <p id="num">
        {index + 1}/{length}
      </p>

      {pictures.map((picture, picindex) => {
        return (
          <div className="carrouselpic" key={`${id}  ${picindex}`}>
            {picindex === index && (
              <img
                src={picture}
                alt={`photographie ${picindex + 1} du logement`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;
