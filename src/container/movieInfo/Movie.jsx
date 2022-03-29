import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import styles from "./Movie.module.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id}=useParams();
  useEffect(() => {
    const fetchMovieData= async () => {
      setLoading(true);
      const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`;
      const movieData= await fetch(url);
      const movies = await movieData.json();
      setMovieData(movies.data);
      setLoading(false);
    };

    fetchMovieData();
}, [id]);
  return (
  <>
   { loading ? <Loader /> :
    <>
      <div className={`${styles.container} flex`}>
        <Link to="/" className={styles.back}><ArrowRightAltIcon id={styles.arrow}/></Link>
        <div className={`${styles.details} flex-c`}>
          <h1 className={`${styles.title} txt-al-cen`}>
            {movieData?.original_title}
          </h1>
          <p className={`${styles.tagline} txt-al-cen`}>{movieData?.tagline}</p>
          <div className={`${styles.vote_desc} flex al-cent j-bet`}>
            <div className={`${styles.votes} flex al-cent j-cen `}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#d1cbcb"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="224 208 32 208 32 48"
                  fill="none"
                  stroke="#d1cbcb"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
                <polyline
                  points="224 96 160 152 96 104 32 160"
                  fill="none"
                  stroke="#d1cbcb"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
              <h5>{movieData?.vote_average}</h5>
            </div>
            <div className={`${styles.votes} flex al-cent j-cen `}>
              <h5>{movieData?.vote_count} votes</h5>
            </div>
          </div>
          <div className={`flex al-cen ${styles.date}`}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#d1cbcb"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect
                x="40"
                y="40"
                width="176"
                height="176"
                rx="8"
                fill="none"
                stroke="#d1cbcb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></rect>
              <line
                x1="176"
                y1="24"
                x2="176"
                y2="56"
                fill="none"
                stroke="#d1cbcb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="80"
                y1="24"
                x2="80"
                y2="56"
                fill="none"
                stroke="#d1cbcb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="88"
                x2="216"
                y2="88"
                fill="none"
                stroke="#d1cbcb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
            <h5 className={styles.release_date}>{movieData?.release_date}</h5>
          </div>
          <div className={`${styles.genre} flex`}>
            {movieData?.genres?.map((e) => (
              <button className={styles.genre_button} key={e.id}>
                {e.name}
              </button>
            ))}
          </div>
          <p className={styles.description}>{movieData?.overview}</p>
          <a href={movieData?.homepage} >
            <button className={`${styles.redirect_button} flex j-cen al-cen`}>
              Visit their official website
            </button>
          </a>
        </div>
        <div className={styles.bg}>
          <div className={styles.preview}>
            <img
              id={styles.img}
              src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`}
              alt=""
            />
          </div>
          <div className={styles.options}>Imdb</div>
        </div>
      </div>
    </>}
  </>
  );
};

export default Movie;
