import React, { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import "./Movie.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const MovieList = () => {
  const [Movie, setMovieList] = useState([]);
  const { type } = useParams();

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <>
      <div className="movie">
        <div className="cards">
          {Movie.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MovieList;
