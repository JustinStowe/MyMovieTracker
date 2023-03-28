import React, { useState, useEffect } from "react";
import { useController } from "../../Controller";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import styles from "./SingleMovie.module.scss";

export function SingleMovie({ user, setUser }) {
  const {
    userMovies,
    userWatchedMovies,
    comments,
    getAllComments,
    addComment,
  } = useController();
  console.log("usermovies in dsingle", userMovies);
  const { id } = useParams();
  console.log("Single movie id", id);

  const [inputComments, setInputComments] = useState("");

  const [text, setText] = useState("");
  useEffect(() => {
    setText("Movie Info");
  }, []);
  useEffect(() => {
    if (comments.length < 1) {
      getAllComments();
    }
  }, []);

  // const movie = userMovies.find((movie) => (movie.id = id));

  const movieFunction = () => {
    const indexOfMovie = userMovies.findIndex((i) => i._id === id);
    const movieByIndex = userMovies[indexOfMovie];
    const indexOfMovieWatched = userWatchedMovies.findIndex(
      (i) => i._id === id
    );
    const movieByIndexWatched = userWatchedMovies[indexOfMovieWatched];
    return movieByIndex || movieByIndexWatched;
  };

  const movie = movieFunction();
  console.log("Movie on Single", movie);

  const handleInputChange = (event) => {
    setInputComments(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("movie id in single before sent to controller", id);
    if (event.key === "Enter") {
      addComment(inputComments, id);
      setInputComments("");
      getAllComments();
    }
  };

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
            <p>You can enter your comments here:</p>
            <input
              style={{
                width: 300,
              }}
              type="text"
              value={inputComments}
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
            />
            <div>
              {comments.map((comment) => {
                return (
                  <div className={styles.div3} key={comment._id}>
                    <h3>{comment.body}</h3>

                    {/* <button
                    className="deleteButton"
                    onClick={() => {
                      deleteComment(comment._id);
                      getAllComments();
                    }}
                  >
                    Delete
                  </button> */}
                  </div>
                );
              })}
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
