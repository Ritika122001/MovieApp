import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [currmovie, setcurrmovie] = useState();
  const { id } = useParams();

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setcurrmovie(data));
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="movies">
      <div class="movie_details">
        <div className="flex">
          <div className="movie_name">
            {currmovie ? currmovie.original_title : ""}
          </div>

          <div className="movie_tagline">
            {currmovie ? currmovie.tagline : ""}
          </div>

          <div className="movie_rating">
            {currmovie ? currmovie.vote_average : ""}{" "}
            <span className="stari">
              <ion-icon name="star"></ion-icon>
            </span>
            <span className="movie_voteCount">
              {currmovie ? "(" + currmovie.vote_count + ") votes" : ""}
            </span>
          </div>

          <div className="movie_time">
            {currmovie ? currmovie.runtime + " mins" : ""}
          </div>
          <div className="movie_releaseDate">
            {currmovie ? "Release date: " + currmovie.release_date : ""}
          </div>
          <div className="movie_genres">
            {currmovie && currmovie.genres
              ? currmovie.genres.map((genre) => (
                  <>
                    <span className="movie_genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>

          {/* <div className="movie_Button">
            <div>                <div>
                  <a
                    href={currmovie.homepage}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <p>
                      <span className="movie_homeButton movie_Button">
                        Homepage{" "}
                        <i className="newTab fas fa-external-link-alt"></i>
                      </span>
                    </p>
                  </a>
                </div>
              )} 
            </div> */}
          <div className="movie_Button">
            {currmovie && currmovie.imdb_id && (
              <a
                href={"https://www.imdb.com/title/" + currmovie.imdb_id}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie_imdbButton movie_Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
        </div>

        <div class="movie_poster">
          <img
            src={`https://image.tmdb.org/t/p/original${
              currmovie ? currmovie.poster_path : ""
            }`}
          />
        </div>
      </div>

      {/*        
      </div> */}

      {/* <div class="movie_img">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currmovie ? currmovie.backdrop_path : ""
          }`}
        />
      </div> */}

      {/* <div className="movie_details"> 
        <div className="movie_left_detail">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${
                currmovie ? currmovie.poster_path : ""
              }`}
            />
          </div>
        </div>

        <div className="movie_right">
          <div className="movie_detail_right">
            <div className="movie_name">
              {currmovie ? currmovie.original_title : ""}
            </div>
            <div className="movie_tagline">
              {currmovie ? currmovie.tagline : ""}
            </div>
            <div className="movie_rating">
              {currmovie ? currmovie.vote_average : ""}{" "}
              <ion-icon name="star"></ion-icon>
              <span className="movie_voteCount">
                {currmovie ? "(" + currmovie.vote_count + ") votes" : ""}
              </span>
            </div>

            <div className="movie_time">
              {currmovie ? currmovie.runtime + " mins" : ""}
            </div>
            <div className="movie_releaseDate">
              {currmovie ? "Release date: " + currmovie.release_date : ""}
            </div>
            <div className="movie_genres">
              {currmovie && currmovie.genres
                ? currmovie.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>

          <div className="movie_detailRightBottom">
            <div className="Text">Synopsis</div>
            <div>{currmovie ? currmovie.overview : ""}</div>
          </div>
        </div>
      </div>

      <div className="movie_links">
        <div className="movie_heading">Useful Links</div>
        {currmovie && currmovie.homepage && (
          <a
            href={currmovie.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_homeButton movie_Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currmovie && currmovie.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currmovie.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_imdbButton movie_Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>

      <div className="movie_heading">Production companies</div>
      <div className="movie_production">
        {currmovie &&
          currmovie.production_companies &&
          currmovie.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie_productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div> */}
    </div>
  );
};

export default MovieDetail;
