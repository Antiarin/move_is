import React, { useEffect, useMemo, useRef, useState } from "react";
import Card from "../../components/card/Card";
import styles from "./Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../../components/dropDown/Dropdown";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import SearchIcon from "@mui/icons-material/Search";
import { FilterDramaTwoTone } from "@mui/icons-material";

const filters = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 28,
    name: "Action",
  },
];

const releaseDate = [
  {
    id: "0",
    name: "Release Date",
  },
  {
    id: "2022",
    name: 2022,
  },
  {
    id: "2021",
    name: 2021,
  },
  {
    id: "2020",
    name: 2020,
  },
  {
    id: "2019",
    name: 2019,
  },
  {
    id: "2018",
    name: 2018,
  },
  {
    id: "2017",
    name: 2017,
  },
  {
    id: "2016",
    name: 2016,
  },
  {
    id: "2015",
    name: 2015,
  },
  {
    id: "2014",
    name: 2014,
  },
  {
    id: "2013",
    name: 2013,
  },
  {
    id: "2012",
    name: 2012,
  },
  {
    id: "2011",
    name: 2011,
  },
  {
    id: "2010",
    name: 2010,
  },
  {
    id: "2009",
    name: 2009,
  },
  {
    id: "2008",
    name: 2008,
  },
  {
    id: "2007",
    name: 2007,
  },
];
const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(0);
  const [date, setDate] = useState("0");
  const [noData, setNoData] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      setLoading1(true);
      const url = `https://movie-task.vercel.app/api/popular?page=${page}`;
      const Data = await fetch(url);
      const movies = await Data.json();
      setData(movies.data.results);
      setFiltered(movies.data.results);
      setLoading(false);
      setLoading1(false);
    } catch (error) {
      alert(error);
    }
  };
  const handleSearch = async () => {
    try {
      if (inputRef.current.value === "") {
        fetchData();
        return;
      }
      setLoading(true);
      const url = `https://movie-task.vercel.app/api/search?page=${page}&query=${inputRef.current.value}`;
      const Data = await fetch(url);
      const movies = await Data.json();
      setData(movies.data.results);
      setFiltered(movies.data.results);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (inputRef.current && inputRef.current.value === "") {
      fetchData();
    } else {
      handleSearch();
    }
  }, [page]);
  console.log(inputRef);
  useEffect(() => {
    if (genre === 0) {
      setFiltered(data);
      return;
    }
    const filtering = data.filter((movie) => movie.genre_ids.includes(genre));
    console.log(filtering);
    setFiltered(filtering);
  }, [genre]);

  useEffect(() => {
    if (date === "0") {
      setFiltered(data);
      return;
    }
    const filteration = data.filter((movie) => {
      console.log(movie.release_date.split("-")[0]);
      return movie.release_date.split("-")[0] == date;
    });
    setFiltered(filteration);
  }, [date]);

  useEffect(() => {
    if (filtered.length === 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
  }, [filtered]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Move-is?</h1>
        <div className={`${styles.filter} flex al-cen j-bet`}>
          <Dropdown
            className={styles.dropdown}
            activeGenre={genre}
            setActiveGenre={setGenre}
            options={filters}
          />
          <Dropdown
            className={styles.dropdown}
            activeGenre={date}
            setActiveGenre={setDate}
            options={releaseDate}
          />
          <div className={`${styles.input_field} flex al-cen`}>
            <input
              id={styles.input}
              placeholder="Search for your favorite movies"
              onChange={handleSearch}
              ref={inputRef}
            />
            <button
              className={styles.search_button}
              type="submit"
              onClick={handleSearch}
            >
              <SearchIcon id={styles.search} />
            </button>
          </div>
        </div>
        <div className={styles.bodyComp}>
          {loading1 ? (
            <Loader />
          ) : (
            <>
              {noData ? (
                <div className={`${styles.nomovies} flex al-cen j-cen`}>
                  <p>Oppssss! There are no movies</p>
                </div>
              ) : (
                <>
                  {loading ? (
                    <>
                      <Loader />
                    </>
                  ) : (
                    <motion.div layout className={styles.body}>
                      <AnimatePresence>
                        {filtered.map((props) => (
                          <Card
                            key={props.id}
                            {...props}
                            onClick={() => navigate(`/movies/${props.id}`)}
                          />
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        <div className={styles.pagination}>
          <Pagination
            count={500}
            variant="outlined"
            shape="circular"
            page={page}
            onChange={handleChange}
            size="large"
            color="secondary"
            className={styles.pagination_bar}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
