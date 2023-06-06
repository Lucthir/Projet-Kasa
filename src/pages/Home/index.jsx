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

// const [isLogement, setIsLogement] = useState(false);
// const [selectedLogement, setSelectedLogement] = useState();
// // console.log(selectedLogement);
// let focusedLocation = locationList.filter(
//   (location) => location.id === selectedLogement
// );
// // console.log(focusedLocation);

// return isLogement ? (
//   <div>
//     <Banner
//       bannerText="Chez vous, partout et ailleurs"
//       background={background_home}
//     />
//     <button onClick={() => setIsLogement(false)}>Fermer</button>
//     <div className="logement_section">
//       {focusedLocation.map(
//         ({
//           id,
//           title,
//           cover,
//           pictures,
//           description,
//           host,
//           rating,
//           location,
//           equipments,
//           tags,
//         }) => (
//           <Logement
//             id={id}
//             title={title}
//             cover={cover}
//             pictures={pictures}
//             description={description}
//             host={host}
//             rating={rating}
//             location={location}
//             equipments={equipments}
//             tags={tags}
//             key={`${id} + location`}
//           />
//         )
//       )}
//     </div>
//   </div>
// ) : (
//   <div>
//     <Banner
//       bannerText="Chez vous, partout et ailleurs"
//       background={background_home}
//     />
//     <div className="gallery">
//       <Gallery
//         isLogement={isLogement}
//         setIsLogement={setIsLogement}
//         selectedLogement={selectedLogement}
//         setSelectedLogement={setSelectedLogement}
//       />
//     </div>
//   </div>
// );
