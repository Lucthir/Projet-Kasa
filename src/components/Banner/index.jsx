function Banner({ bannerText, background }) {
  return (
    <div className="banner">
      <img src={background} alt="montagnes et riviere"></img>
      <div className="filter">{bannerText}</div>
    </div>
  );
}

export default Banner;
