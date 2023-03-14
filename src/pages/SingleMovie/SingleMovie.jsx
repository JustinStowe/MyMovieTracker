import React, { useState, useEffect } from "react";
import { useController } from "../../Controller";
import Header from "../../components/Header/Header";

export function SingleMovie({ user, setUser }) {
  const { movie, deleteMovie } = useController();

  const [text, setText] = useState("");
  useEffect(() => {
    setText("Movie Info");
  }, []);
  return (
    <div>
      <Header text={text} />
      <div className="text">
        <h3>Title:</h3> <h3 className="answertext">{movie.title}</h3>
      </div>
      <div className="text">
        <h3>Year:</h3> <h3 className="answertext">{movie.year}</h3>
      </div>
      <div className="text">
        <h3>Ganre:</h3> <h3 className="answertext">{movie.ganre}</h3>
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
