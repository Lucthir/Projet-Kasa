import Banner from "./../../components/Banner";
import Gallery from "./../../components/Gallery";
import "./../../utils/style/style.scss";

function Home() {
  return (
    <div>
      <Banner bannerText="Chez vous, partout et ailleurs" />
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
