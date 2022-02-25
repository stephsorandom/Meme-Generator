import React, { useEffect, useState } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage(memes) {
    console.log(memes);
    const randomNumber = Math.floor(Math.random() * memes.length);
    const url = memes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        return data.data.memes;
      })
      .then((memes) => {
        getMemeImage(memes);
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form-button" onClick={() => getMemeImage(allMemes)}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      <div>
        {allMemes.map((minMeme) => (
          <img
            className="miniMemes"
            src={minMeme.url}
            onClick={() => {
              setMeme((prevMeme) => ({
                ...prevMeme,
                randomImage: minMeme.url,
              }));
            }}
          />
        ))}
      </div>
    </main>
  );
}

export default Meme;
