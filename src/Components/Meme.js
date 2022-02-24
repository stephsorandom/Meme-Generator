import React from "react"
import memeData from '../memeData'

function Meme() {
    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url) 
    }

    return (
        <main>
         <div>
            <form className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" /> 
            </form>
            <div>
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
         </div>
         <img src={memeImage} className="meme-image" />
        </main>
    )
}

export default Meme