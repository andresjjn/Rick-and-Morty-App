import "./assests/styles/App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCharacters } from "./redux/actions/characters";
import { getEpisodes } from "./redux/actions/episodes";
import { getLocations } from "./redux/actions/locations";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(2));
    dispatch(getEpisodes());
    dispatch(getLocations());
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
