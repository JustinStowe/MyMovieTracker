import React, { useState, useEffect } from "react";
import { useController } from "../../Controller";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import styles from "./SingleMovie.module.scss";

export function SingleMovie({ user, setUser }) {
  const { movies, deleteMovie, getSingleMovie, userMovies, getAllMovies } =
    useController();
  console.log("usermovies in dsingle", userMovies);
  const { id } = useParams();
  console.log(id);

  const [text, setText] = useState("");
  useEffect(() => {
    setText("Movie Info");
  }, []);
  // useEffect(() => {
  //   if (movies.length < 1) {
  //     getSingleMovie(movies._id);
  //   }
  // }, []);

  // const movie = userMovies.find((movie) => (movie.id = id));

  const movieFunction = () => {
    const indexOfMovie = userMovies.findIndex((i) => i._id === id);
    const movieByIndex = userMovies[indexOfMovie];
    return movieByIndex;
  };
  const movie = movieFunction();
  console.log("WTF", movie);
  return (
    <div>
      <div className="header">
        <Header text={text} />
      </div>
      <div className={styles.SingleMovie}>
        <aside className={styles.aside}>
          <Aside user={user} setUser={setUser} />
        </aside>
        <div className={styles.div2}>
          <div>
            <div className="">
              <img src={movie.Poster} alt={movie.Title} />
              {/* <h3>Ganre:</h3> <h3 className="answertext">{movie.Ganre}</h3> */}
            </div>
            <div className={styles.divItem}>
              <h3>Title:</h3> <h3 className="answertext">{movie.Title}</h3>
            </div>
            <div className={styles.divItem}>
              <h3>Year:</h3> <h3 className="answertext">{movie.Year}</h3>
            </div>

            {/* <button
        className="answer"
        onClick={() => {
          deleteMovie();
        }}
      >
        Delete Movie
      </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
