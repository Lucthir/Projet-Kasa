import Banner from "./../../components/Banner";
import Card from "./../../components/Card";
import "./../../utils/style/style.scss";

function Home() {
  return (
    <div>
      <Banner bannerText="Chez vous, partout et ailleurs" />
      <div className="gallery">
        <Card />
      </div>
    </div>
  );
}

export default Home;
