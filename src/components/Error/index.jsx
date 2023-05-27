import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <h1 className="number">404</h1>
      <h2 className="text">Oups! la page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error-link">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
