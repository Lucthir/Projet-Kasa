import Card from "./../../components/Card";

function Gallery() {
  let locationList = require("./../../datas/data.json");

  return (
    <div className="inner-gallery">
      {locationList.map(({ id, title, cover }) => (
        <Card id={id} title={title} cover={cover} />
      ))}
    </div>
  );
}

export default Gallery;
