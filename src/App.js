import React from "react";
import ReactDOM from "react-dom";
import ArtistSongComponent from "./ArtistSongComponent";
// import "./styles.css";

const App = () => {

    return(
        <>
            <header>
                <h1>playPI</h1>
                <input className="artist-results-item search" type="text" placeholder="search for artist" />
            </header>

            <main className="container">
                <aside className="item"></aside>
                <div className="item artist-results">
                    <div className="artist-name-container">
                    <img className="artist-img" src="https://images.genius.com/f08637c8cfdeaab4dfbf0631424001ec.640x640x1.jpg" alt="Kendrick Lamar" />
                    <h2 className="artist-name">Kendrick Lamar</h2>
                </div>
    
            <div className="artist-hits">
                {[1, 2, 3, 4, 5, 6].map(item => (
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
  return React.createElement("div", {}, [
    React.createElement("header", {}, [
      React.createElement("h1", {}, "playPI"),
      React.createElement("input", {
        className: "artist-results-item search",
        type: "text",
        placeholder: "search for artist",
      }),
    ]),

    React.createElement("main", { className: "container" }, [
      React.createElement("aside", { className: "item" }),
      React.createElement("div", { className: "item artist-results" }, [
        React.createElement("div", { className: "artist-name-container" }, [
          React.createElement("img", {
            className: "artist-img",
            src: "https://images.genius.com/f08637c8cfdeaab4dfbf0631424001ec.640x640x1.jpg",
            alt: "Kendrick Lamar",
          }),
          React.createElement(
            "h2",
            { className: "artist-name" },
            "Kendrick Lamar"
          ),
        ]),

        React.createElement("div", { className: "artist-hits" }, [
          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),

          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),

          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),

          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),

          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),

          React.createElement(ArtistSongComponent, {
            albumImageUrl:
              "https://images.genius.com/c13826dfa0fc9504d3b513b407fafbea.300x300x1.jpg",
            description: "humble by kendrick lamar",
            songTitle: "Humble",
          }),
        ]),
      ]),
    ]),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
