import React from "react";
import { useController } from "../../Controller";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import styles from "./MoviesToWatch.module.scss";

export default function MoviesToWatch({ user, setUser }) {
  const {
    getAllMovies,
    movies,
    deleteMovie,
    watchedMovie,
    updateUser,
    userMovies,
  } = useController();
  // console.log(movies);
  console.log("user movies");

  useEffect(() => {
    if (userMovies.length < 1) {
      getAllMovies();
    }
  }, []);
  const [text, setText] = useState("");
  useEffect(() => {
    setText("Movies To Watch");
  }, []);
  return (
    <div className="show">
      <div className="header">
        <Header text={text} />
      </div>
      <div className={styles.MoviesToWatch}>
        <aside className={styles.aside}>
          <Aside user={user} setUser={setUser} />
        </aside>
        <div className={styles.div2}>
          {userMovies.map((movie) => {
            console.log("Movie object", movie);
            return (
              <div className="">
                <div className={styles.div3} key={movie._id}>
                  <h1>{movie.Title}</h1>
                  <img src={movie.Poster} alt={movie.Title} />
                  <Link to={`/movie/${movie._id}`}>
                    <button>Movie Details</button>
                  </Link>
                  <button
                    onClick={() => {
                      updateUser(movie._id);
                      getAllMovies();
                      // updateMovie(movie._id, movie);
                    }}
                  >
                    Watched
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => {
                      deleteMovie(movie._id);
                      getAllMovies();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
