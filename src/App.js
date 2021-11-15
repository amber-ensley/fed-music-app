import React, { useState } from "react";
import ReactDOM from "react-dom";
import ArtistSongComponent from "./ArtistSongComponent";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistName, setArtistName] = useState("Kendrick Lamar");
  const [artistImgUrl, setArtistImgUrl] = useState("https://images.genius.com/f08637c8cfdeaab4dfbf0631424001ec.640x640x1.jpg");
  const [artistHits, setArtistHits] = useState([1, 2, 3, 4, 5, 6]);

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

    return(
        <>
            <header>
                <h1>playPI</h1>
                <input 
                  className="artist-results-item search" 
                  type="text" 
                  placeholder="search for artist" 
                  value={searchTerm}
                  onChange={onChangeHandler}/>
            </header>

            <main className="container">
                <aside className="item"></aside>
                <div className="item artist-results">
                    <div className="artist-name-container">
                    <img className="artist-img" src={artistImgUrl} alt={artistName} />
                    <h2 className="artist-name">{artistName}</h2>
                </div>
    
            <div className="artist-hits">
                {artistHits.map(item => (
                    <ArtistSongComponent
                    key={item} 
                    songTitle="Humble" 
                    albumImageUrl="https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg"
                    description="humble by kendrick lamar" />))}
                
            </div>
    
        </div>
        <aside className="item"></aside>
    </main>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
