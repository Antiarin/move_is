import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css";
let id = 634649;
const Movie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://movie-task.vercel.app/api/movie?movieId=634649`;
      const Data = await fetch(url);
      const movies = await Data.json();
      setData(movies.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {data.map((props) => (
        <div className={`${styles.container} flex`} key={props.id}>
          <div className={`${styles.details} flex-c`}>
            <h1>{props.original_title}</h1>
            <p className={styles.tagline}>{props.tagline}</p>
            <div className={`${styles.vote_desc} flex al-cent j-bet`}>
              <div className={styles.votes}>
                <h5>{props.vote_average}</h5>
              </div>
              <div className={styles.votes}>
                <h5>{props.vote_count} votes</h5>
              </div>
              <p className={styles.release_date}>{props.released}</p>
            </div>
            <div className={`{styles.genre} flex`}>
              {props.genres.map((e) => (
                <button className={styles.genre_button} key={e.id}>
                  {e.name}{" "}
                </button>
              ))}
            </div>
            <p>{props.overview}</p>
            <a href={props.homepage}>
              <button className={styles.redirect_button}>
                Visit their official website
              </button>
            </a>
          </div>
          <div className={styles.container}>
            <div className={styles.preview}>
              <img
                src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                alt=""
              />
            </div>
            <div className={styles.option}>
                IMDB
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movie;
