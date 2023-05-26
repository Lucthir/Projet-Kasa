import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/style/style.scss";
import Home from "./pages/Home";
import Card from "./components/Card";
import About from "./pages/About";
import Error from "./components/Error";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche-logement" element={<Card />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
