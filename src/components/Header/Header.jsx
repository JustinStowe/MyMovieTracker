import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header({ text }) {
  return (
    <header className={styles.Header}>
      <h1 className="">{text}</h1>
      <button className={styles.button}>
        <Link className={styles.Link} to="/moviestowatch">
          Movies to Watch
        </Link>
      </button>
      <button className={styles.button}>
        <Link className={styles.Link} to="/">
          Search
        </Link>
      </button>
      <button className={styles.button}>
        {" "}
        <Link className={styles.Link} to="/watchedmovies">
          Watched movies
        </Link>
      </button>
    </header>
  );
}
