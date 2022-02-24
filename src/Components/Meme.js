import React from "react"

function Meme() {
    return (
        <main>
         <div>
            <form className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" /> 
            </form>
            <div>
                <button className="form-button">
                    Get a new meme image 🖼
                </button>
            </div>
         </div>
            
        </main>
    )
}

export default Meme