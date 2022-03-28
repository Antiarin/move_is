import logo from "./logo.svg";
import "./App.css";
import Home from "./container/home/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./container/movieInfo/Movie";

function App() {
  return (
    <div className="App">
      <Movie/>
      <Routes>
        {/* useParams  */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies"  element={<Movie/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
