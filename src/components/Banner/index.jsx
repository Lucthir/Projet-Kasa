import background_about from "./../../assets/background_about.png";

function Banner({ bannerText }) {
  return (
    <div className="banner">
      <img src={background_about} alt="montagnes et riviere"></img>
      <div className="filter">{bannerText}</div>
    </div>
  );
}

export default Banner;
