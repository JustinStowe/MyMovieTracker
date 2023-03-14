import React, { useState } from "react";
import axios from "axios";

export default function Search({ user, setUser }) {
  const [input, setInput] = useState("");
  const [moviesImdb, setMoviesImdb] = useState([]);

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
  return (
    <div>
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
          return (
            <div key={index}>
              <h1>{movieImdb.Title}</h1>
              <img src={movieImdb.poster} alt={movieImdb.Title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
