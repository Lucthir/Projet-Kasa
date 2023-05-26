function Card({ id, title, cover }) {
  return (
    <div className="card">
      <h1>Fiche Logement</h1>
      <img src={cover} className="picture" alt={`${title} cover`} />
      {title}
    </div>
  );
}

export default Card;
