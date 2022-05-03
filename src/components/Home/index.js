import React from "react";
import mainImage from "../../assests/images/characters_transparent.gif";
import "../../assests/styles/home.css";
export default function Home() {
  return (
    <main>
      <h2 className="main-title"> The absolute Rick and Morty Experience</h2>
      <img
        src={mainImage}
        alt="Rick and Morty"
        className="main-image image-animated"
      />
    </main>
  );
}
