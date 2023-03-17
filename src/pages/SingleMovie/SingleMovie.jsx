import React, { useState, useEffect } from "react";
import { useController } from "../../Controller";
import Header from "../../components/Header/Header";

export function SingleMovie({ user, setUser }) {
  const { movies, deleteMovie, getSingleMovie } = useController();

  const [text, setText] = useState("");
  useEffect(() => {
    setText("Movie Info");
  }, []);

  useEffect(() => {
    if (movies.length < 1) {
      getSingleMovie(movies._id);
    }
  }, []);
  return (
    <div>
      <Header text={text} />
      <div className="text">
        <h3>Title:</h3> <h3 className="answertext">{movies.Title}</h3>
      </div>
      <div className="text">
        <h3>Year:</h3> <h3 className="answertext">{movies.Year}</h3>
      </div>
      <div className="text">
        <img src={movies.Poster} alt={movies.Title} />
        {/* <h3>Ganre:</h3> <h3 className="answertext">{movie.Ganre}</h3> */}
      </div>
      <button
        className="answer"
        onClick={() => {
          deleteMovie();
        }}
      >
        Delete Movie
      </button>
      <div>Comments</div>
    </div>
  );
}
