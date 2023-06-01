import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/style/style.scss";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Error from "./components/Error";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Logement from "./components/Logement";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Card from "./components/Card";
// import { useState } from "react";
import Routing from "./routes/Routing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Routing />
  // <React.StrictMode>
  //   <Router>
  //     <Header />
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <Home
  //             selectedLogement={selectedLogement}
  //             setSelectedLogement={setSelectedLogement}
  //           />
  //         }
  //       />
  //       <Route path="/about" element={<About />} />
  //       <Route
  //         path={`/logement/${logement.id}`}
  //         element={<Logement id={logement.id} />}
  //       />
  //       {/* <Route path="*" element={<Error />} /> */}
  //     </Routes>
  //     <Footer />
  //   </Router>
  // </React.StrictMode>
);

// http://localhost:3000/fiche/b9123946

/* <Route key={fiche.id} path={`/fiche/${fiche.id}`} element={<Fiche id={fiche.id} />} /> */
