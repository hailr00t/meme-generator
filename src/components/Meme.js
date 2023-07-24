import React from "react";
import memesData from "../memesData";

function Meme(props) {
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/1bgw.jpg"
  );

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    return randomMeme.url;
  }

  function handleClickEvent() {
    setMemeImage(getMemeImage());
  }

  return (
    <main>
      <div className="form">
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
        <button className="form--button" onClick={handleClickEvent}>
          Get a new meme image 🖼
        </button>
      </div>
      <div>
        <img src={memeImage} alt="meme" className="meme--image"></img>
      </div>
    </main>
  );
}

export default Meme;
