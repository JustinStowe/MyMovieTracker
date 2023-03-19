import React from "react";
import { useController } from "../../Controller";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import styles from "./WatchedMovies.module.scss";

export default function WatchedMovies({ user, setUser }) {
  const {
    getAllMovies,
    movies,
    deleteMovie,
    userWatchedMovies,
    updateUser,
    getAllWatchedMovies,
  } = useController();
  console.log("Watched Movies", movies);

  useEffect(() => {
    if (movies.length < 1) {
      getAllWatchedMovies();
    }
  }, []);
  const [text, setText] = useState("");
  useEffect(() => {
    setText("Watched Movies");
  }, []);
  return (
    <div className="show">
      <div className="header">
        <Header text={text} />
      </div>
      <div className={styles.WatchedMovies}>
        <aside className={styles.aside}>
          <Aside user={user} setUser={setUser} />
        </aside>
        <div className={styles.div2}>
          {userWatchedMovies.map((movie) => {
            return (
              <div className={styles.div3} key={movie._id}>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />
                <Link to={`/movie/${movie._id}`}>
                  <button>Movie Details</button>
                </Link>
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteMovie(movie._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
