import logo from "./../../assets/logo_white.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" id="logo"></img>
      <div className="rights">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
