import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <img src={logo} alt="logo kasa"></img>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </div>
  );
}

export default Header;
