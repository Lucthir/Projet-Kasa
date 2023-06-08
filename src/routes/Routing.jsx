import React from "react";
import "./../utils/style/style.scss";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Error from "./../components/Error";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Logement from "./../pages/Logement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

function Routing() {
  const [selectedId, setSelectedId] = useState();
  let locationList = require("./../datas/data.json");

  let selectedLogement = locationList.filter(
    (location) => location.id === selectedId
  );
  //   console.log(selectedLogement);

  //   console.log(selectedId);

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home selectedId={selectedId} setSelectedId={setSelectedId} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path={`/logement/${selectedId}`}
            element={selectedLogement.map(
              ({
                id,
                title,
                cover,
                pictures,
                description,
                host,
                rating,
                location,
                equipments,
                tags,
              }) => (
                <Logement
                  id={id}
                  title={title}
                  cover={cover}
                  pictures={pictures}
                  description={description}
                  host={host}
                  rating={rating}
                  location={location}
                  equipments={equipments}
                  tags={tags}
                  key={`${id} + location`}
                />
              )
            )}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default Routing;
// selectedLogement.map(
//               ({
//                 id,
//                 title,
//                 cover,
//                 pictures,
//                 description,
//                 host,
//                 rating,
//                 location,
//                 equipments,
//                 tags,
//               }) => (
//                 <Logement
//                   id={id}
//                   title={title}
//                   cover={cover}
//                   pictures={pictures}
//                   description={description}
//                   host={host}
//                   rating={rating}
//                   location={location}
//                   equipments={equipments}
//                   tags={tags}
//                   key={`${id} + location`}
//                 />
//               )
//             )
