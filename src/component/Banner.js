import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );

      return requests;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_items">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
          <p className="banner_info">{truncate(movie?.overview, 150)}</p>
        </div>
        <div className="banner_fade"></div>
      </header>
    </div>
  );
}

export default Banner;
