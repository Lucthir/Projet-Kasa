import { generatePath, useNavigate } from "react-router-dom";

function Card({ id, title, cover, selectedId, setSelectedId }) {
  const navigate = useNavigate();

  function handleClick() {
    generatePath("/logement/:id/", {
      id: { id },
    });
    sessionStorage.setItem(`path${id}`, `/logement/${id}`);
    setSelectedId(id);
  }

  return (
    <div
      className="card"
      onClick={() => {
        handleClick();
        navigate(`/logement/${id}`);
      }}
    >
      <img src={cover} className="picture" alt={`${title} cover`}></img>
      <div className="filter"></div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;

// onClick={() => {
//   setIsLogement(true);
//   setSelectedLogement(id);
// }}
