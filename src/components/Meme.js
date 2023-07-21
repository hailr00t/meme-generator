import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Shut up"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="and take my money"
        ></input>
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
