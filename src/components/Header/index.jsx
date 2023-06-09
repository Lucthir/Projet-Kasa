import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" id="logo"></img>
      <div className="nav">
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/about" className="link">
          A Propos
        </Link>
      </div>
    </div>
  );
}

export default Header;
