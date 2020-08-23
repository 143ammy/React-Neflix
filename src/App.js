import React from "react";
import request from "./component/request";
import "./App.css";
import Rows from "./component/Rows";
import Nav from "./component/Nav";
import Banner from "./component/Banner";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Rows title="Romantic" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;
