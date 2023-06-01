import Collapse from "./../../components/Collapse";
import Carrousel from "./../../components/Carrousel";

function Logement({
  id,
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <div className="logement">
      <div className="lgmt-carrousel">
        <Carrousel pictures={pictures} id={id} />
      </div>
      <h3 className="lgmt-title">{title}</h3>
      <div className="lgmt-location">{location}</div>
      <div className="lgmt-tags">{tags}</div>
      <div className="lgmt-host">
        {host.name}
        <img src={host.picture} alt="host-pic"></img>
      </div>
      <div className="lgmt-rating">{rating}</div>
      <div className="lgmt-description">
        <Collapse title="Description" text={description} />
      </div>
      <div className="lgmt-equipments">
        <Collapse title="Equipements" text={equipments} />
      </div>
    </div>
  );
}

export default Logement;
