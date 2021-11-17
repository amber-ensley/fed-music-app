import React from "react";
// import "./styles.css";

const ArtistSongComponent = (props) => {

    return(
        <figure className="artist-album-img">
            <img 
                src={props.albumImageUrl} 
                alt={props.description} />
            <figcaption>{props.songTitle}</figcaption>
        </figure>
    )

  };

  export default ArtistSongComponent;