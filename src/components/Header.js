import React from "react";
import troll from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <img src={troll} alt="troll-face" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h2 className="header--subtitle">React Course - Project 3</h2>
    </div>
  );
}
