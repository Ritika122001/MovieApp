import "./styles.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home.js";
import MovieList from "./component/MovieList/Movie";
import MovieDetail from "./Page/MovieDetail/MovieDetail.js";
import Footer from "./component/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" index element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
