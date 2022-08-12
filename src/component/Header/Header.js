import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaImdb, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <div className="overlay"></div>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <ion-icon name="home"></ion-icon>
          </Link>
        </div>

        <div
          className={
            showMediaIcons ? "menu-links mobile-menu-link" : "menu-links"
          }
        >
          <ul>
            <li>
              <Link to="/movies/popular" className="link">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movies/top_rated" className="link">
                TopRated
              </Link>
            </li>
            <li>
              <Link to="/movies/upcoming" className="link">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://github.com/Ritika122001/MovieApp" >
                <FaGithub className="git" />
              </a>
            </li>
            <li>
              <a href="https://www.imdb.com/">
                <FaImdb className="imdb" />
              </a>
            </li>
            <li>
              <a>
                <FaHeart className="heart" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
