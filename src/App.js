import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ArtistSongComponent from "./ArtistSongComponent";
import useDebounce from "./custom-hooks/useDebounce";

const fetchArtist = (search, callback) => {
    fetch(`https://genius.p.rapidapi.com/search?q=${search}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": ""
	}
    })
    .then(response => response.json())
    .then(json => callback(json.response.hits))
    .catch(err => {
    	console.error(err);
    });
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistImgUrl, setArtistImgUrl] = useState("https://i.pinimg.com/originals/9f/a4/d9/9fa4d9bf6bbd6f40371308122b24243d.jpg");
  const [artistHits, setArtistHits] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  
  useEffect(() => {
      // side effects
    // console.log("useEffect running"); // mounting

    const handleArtistCallback = (hitsArray) => {
        console.log(hitsArray);
        setArtistName(hitsArray[0].result.primary_artist.name);
        setArtistImgUrl(hitsArray[0].result.primary_artist.image_url);
        setArtistHits(hitsArray);
    }

    if (debouncedSearchTerm) {
        fetchArtist(debouncedSearchTerm, handleArtistCallback)
    } else {
        setArtistHits([]);
    }

   
    return () => {
        // console.log("component is unmounting"); // unmounting
    }
  }, [debouncedSearchTerm]); // updating

 

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
                {artistHits.length > 0 ? artistHits.map(hit => (
                    <ArtistSongComponent
                    key={hit.result.id} 
                    songTitle={hit.result.full_title}
                    albumImageUrl={hit.result.song_art_image_thumbnail_url}
                    description={hit.result.full_title} />)) : "Search to load song titles"}
                
            </div>
    
        </div>
        <aside className="item"></aside>
    </main>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
