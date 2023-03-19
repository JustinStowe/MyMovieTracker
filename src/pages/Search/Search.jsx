import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useController } from "../../Controller";
import Aside from "../../components/Aside/Aside";
import styles from "./Search.module.scss";

export default function Search({ user, setUser }) {
  const [input, setInput] = useState("");
  const [moviesImdb, setMoviesImdb] = useState([]);
  const { movies, addMovies } = useController();

  const getMoviesImdb = async () => {
    const searchTerm = `${input}&type=movie`;
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=a6484142`;
    try {
      const response = await axios.get(url);
      console.log("Response", response.data.Search);
      setMoviesImdb(response.data.Search);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    getMoviesImdb();
    console.log("Returned movies", moviesImdb);
  };

  const [text, setText] = useState("");
  useEffect(() => {
    setText("Search Movies");
  }, []);

  return (
    <div>
      <Header text={text} user={user} setUser={setUser} />
      <main className={styles.Search}>
        <aside className={styles.aside}>
          <Aside user={user} setUser={setUser} />
        </aside>
        <div className={styles.div2}>
          <h1>Enter Movie to look for</h1>
          <input
            style={{
              width: 300,
            }}
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Search</button>
          <div>
            {moviesImdb.map((movieImdb, index) => {
              const handleAddMovies = () => {
                addMovies(movieImdb);
              };

              return (
                <div className={styles.div3} key={index}>
                  <h1>{movieImdb.Title}</h1>
                  <img src={movieImdb.Poster} alt={movieImdb.Title} />
                  <button onClick={handleAddMovies}>Add to my movies</button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
