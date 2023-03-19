import React from "react";
import { useController } from "../../Controller";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

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
  console.log("user movies", user.movies);

  useEffect(() => {
    if (movies.length < 1) {
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
      <ul className="">
        {userMovies.map((movie) => {
          console.log("Movie object", movie);
          return (
            <li>
              <div className="aDiv" key={movie._id}></div>
              <h1>{movie.Title}</h1>
              <img src={movie.Poster} alt={movie.Title} />
              <Link to={`/movie/${movie._id}`}>
                <button>Movie Details</button>
              </Link>
              <button
                onClick={() => {
                  updateUser(movie._id);
                  // updateMovie(movie._id, movie);
                }}
              >
                Watched
              </button>
              <button
                className="deleteButton"
                onClick={() => {
                  deleteMovie(movie._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
