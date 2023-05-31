function Card({
  id,
  title,
  cover,
  isLogement,
  setIsLogement,
  selectedLogement,
  setSelectedLogement,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        setIsLogement(true);
        setSelectedLogement(id);
      }}
    >
      <img src={cover} className="picture" alt={`${title} cover`} />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
