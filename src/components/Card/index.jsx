function Card({ id, title, cover }) {
  return (
    <div className="card">
      <img src={cover} className="picture" alt={`${title} cover`} />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
