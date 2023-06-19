import Banner from "./../../components/Banner";
import Gallery from "./../../components/Gallery";
import background_home from "./../../assets/background_home.png";

function Home({ selectedId, setSelectedId }) {
  return (
    <div className="home-page">
      <Banner
        bannerText="Chez vous, partout et ailleurs"
        background={background_home}
      />
      <div className="gallery">
        <Gallery selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default Home;
