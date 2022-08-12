import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ movie }) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="cards_poster">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="cards_poster">
            <div className="card_img">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
              />
            </div>
            <div className="card_over">
              <div className="card_title">
                {movie ? movie.original_title : ""}
              </div>

              <div className="card_rating">
                {movie ? movie.vote_average : ""}
                <ion-icon name="star"></ion-icon>
              </div>

              <div className="card_time">{movie ? movie.release_date : ""}</div>

              <div className="card_desc">{movie ? movie.overview : ""}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
