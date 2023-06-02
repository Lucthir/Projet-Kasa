import Collapse from "./../../components/Collapse";
import Carrousel from "./../../components/Carrousel";
import grey_star from "./../../assets/grey_star.svg";
import red_star from "./../../assets/red_star.svg";

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
  function Stars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <img src={red_star} alt="rating stars" className="star"></img>
        );
      } else {
        stars.push(
          <img src={grey_star} alt="rating stars" className="star"></img>
        );
      }
    }
    return stars;
  }

  return (
    <div className="logement">
      <div className="lgmt-carrousel">
        <Carrousel pictures={pictures} id={id} />
      </div>
      <div className="lgmt-description">
        <h3 className="lgmt-title">{title}</h3>
        <div className="lgmt-location">{location}</div>

        <div className="lgmt-tags">
          {tags.map((content, index) => {
            return (
              <p className="tag" key={`tag ${index}`}>
                {content}
              </p>
            );
          })}
        </div>

        <div className="lgmt-host">
          <span className="host-name">{host.name}</span>
          <img src={host.picture} alt="host-pic" className="host-pic"></img>
        </div>

        <div className="lgmt-rating">
          <Stars />
        </div>
        <div className="lgmt-collapsers">
          <div className="lgmt-collapser">
            <Collapse
              title="Description"
              text={description}
              width="95%"
              margin_left="2%"
            />
          </div>
          <div className="lgmt-collapser">
            <Collapse
              title="Equipements"
              text={equipments.map((content, index) => {
                return (
                  <ul className="equipment" key={`equipment ${index}`}>
                    {content}
                  </ul>
                );
              })}
              width="95%"
              margin_left="2%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
