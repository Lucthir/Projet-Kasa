import Card from "./../../components/Card";

function Gallery({
  isLogement,
  setIsLogement,
  selectedLogement,
  setSelectedLogement,
}) {
  let locationList = require("./../../datas/data.json");

  return (
    <div className="inner-gallery">
      {locationList.map(({ id, title, cover }) => (
        <Card
          id={id}
          title={title}
          cover={cover}
          key={`${id}`}
          isLogement={isLogement}
          setIsLogement={setIsLogement}
          selectedLogement={selectedLogement}
          setSelectedLogement={setSelectedLogement}
        />
      ))}
    </div>
  );
}

export default Gallery;
