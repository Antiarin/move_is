import logo from "./logo.svg";
import "./App.css";
import Home from "./container/home/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./container/movieInfo/Movie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />:
      </Routes>
    </div>
  );
}

export default App;
