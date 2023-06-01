import Card from "./../../components/Card";

function Gallery({ selectedId, setSelectedId }) {
  let locationList = require("./../../datas/data.json");

  return (
    <div className="inner-gallery">
      {locationList.map(({ id, title, cover }) => (
        <Card
          id={id}
          title={title}
          cover={cover}
          key={`${id}`}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}

export default Gallery;
