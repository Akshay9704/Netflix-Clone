import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(error => console.log(error));
    }
  }

  return (
    <div className="mt-9">
      <h1 className="-mb-2 ml-4">{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          className="row_poster"
          src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl &&
      <Youtube videoId={trailerUrl} opts={opts}/>
      }
    </div>
  );
};

export default Row;
