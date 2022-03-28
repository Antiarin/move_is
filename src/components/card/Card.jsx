import React from "react";
import styles from "./Card.module.css";
import Clock from "../../assets/home/wallClock.svg";
import eye from "../../assets/home/eye.svg";
import { motion} from "framer-motion";

const Card = ({
  id,
  original_title,
  poster_path,
  release_date,
  vote_average,
  onClick
}) => {
  return (
    <motion.div
      layout
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
      />
      <div className={styles.desc} flex-c al-cen j-bet>
        <div className={`${styles.duration_vote} flex al-cen j-bet`}>
          <div className={`${styles.duration} flex al-cen j-cen`}>
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
            <p>{release_date}</p>
          </div>
          <div className={`${styles.duration} flex al-cen j-cen`}>
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
            <p>{vote_average}</p>
          </div>
        </div>
      </div>
      <h4 className={`txt-al-cen`}>{original_title}</h4>
    </motion.div>
  );
};

export default Card;
