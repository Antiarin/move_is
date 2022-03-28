
import React, { useState } from "react";
import styles from "./Dropdown.module.css";



const Dropdown = ({ className, activeGenre, setActiveGenre, options }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue]=useState(options[0]);
  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
    setActiveGenre(value.id);
  };
  

  return (
    <div
      className={`${styles.dropdown} ${className} ${
        visible ? styles.active : ""
      }`}
    >
      <div
        className={styles.head}
        onClick={() => setVisible(!visible)}

      >
        <div className={styles.selection}>{value.name}</div>
        <div className={styles.arrow}>
          <svg
            id={styles.down}
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <polyline
              points="208 96 128 176 48 96"
              fill="none"
              stroke="#FED530"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></polyline>
          </svg>
        </div>
      </div>
      <div className={styles.body}>
        {options.map((x, index) => (
          <div
            className={`${styles.option} ${
              x === value ? styles.selectioned : ""
            }`}
            onClick={() => handleClick(x)}
            key={index}
          >
            {x.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
