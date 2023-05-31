import Collapse from "./../../components/Collapse";

function Logement({
  id,
  title,
  cover,
  pictures,
  description,
  host,
  name,
  picture,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <div className="logement">
      <div className="lgmt-carrousel">
        <img src={cover}></img>
      </div>
      <h3 className="lgmt-title">{title}</h3>
      <div className="lgmt-tags">{tags}</div>
      <div className="lgmt-host">
        {host.name}
        <img src={host.picture} alt="host-pic"></img>
      </div>
      <div className="lgmt-rating">{rating}</div>
      <div className="lgmt-description">{description}</div>
      <div className="lgmt-equipments">{equipments}</div>
    </div>
  );
}

export default Logement;
