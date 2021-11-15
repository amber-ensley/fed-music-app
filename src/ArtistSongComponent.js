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
    // return React.createElement("figure", { className: "artist-album-img" }, [
    //   React.createElement("img", {
    //     src: props.albumImageUrl,
    //     alt: props.description,
    //   }),
    //   React.createElement("figcaption", {}, props.songTitle),
    // ]);
  };

  export default ArtistSongComponent;