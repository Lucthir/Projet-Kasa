import Banner from "./../../components/Banner";
import Gallery from "./../../components/Gallery";
import background_home from "./../../assets/background_home.png";
import "./../../utils/style/style.scss";

function Home() {
  return (
    <div>
      <Banner
        bannerText="Chez vous, partout et ailleurs"
        background={background_home}
      />
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
