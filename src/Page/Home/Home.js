import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

import MovieList from "../../component/MovieList/Movie";

const Home = () => {
  const [popularMovie, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-IN"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovie.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImg">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="poster_over">
                <div className="poster_title">
                  {movie ? movie.original_title : " "}
                  <span className="poster_rating">
                    {movie ? movie.vote_average : " "}
                    <ion-icon name="star"></ion-icon>
                  </span>
                </div>
                <div className="poster_time">
                  {movie ? movie.release_date : ""}
                </div>
                <div className="poster_desc">{movie ? movie.overview : ""}</div>
              </div>
            </Link>
          ))}
        </Carousel>

        <MovieList />
      </div>
    </>
  );
};

export default Home;
