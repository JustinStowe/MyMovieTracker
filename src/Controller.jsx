import React, { createContext, useContext, useEffect, useState } from "react";
import movieService from "./utilities/movies-api";

const ControllerContext = createContext({});

export function ProvideController({ children }) {
  const provider = useHook();
  return (
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  );
}

export const useController = () => {
  return useContext(ControllerContext);
};

function useHook() {
  const [movies, setMovies] = useState([]);

  async function watchedMovie(id, e) {
    try {
      const moviesCopy = [...movies];
      const indexOfMovie = moviesCopy.findIndex((i) => i._id === id);
      moviesCopy[indexOfMovie].completed = !moviesCopy[indexOfMovie].completed;
      setMovies([...moviesCopy]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllMovies() {
    try {
      const results = await movieService.getAllMovies();
      setMovies(results);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSingleMovie(id) {
    try {
      const results = await movieService.getOneMovie(id);
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteMovie(id) {
    try {
      await movieService.deleteMovie(id);
      const indexToRemove = movies.findIndex((movie) => movie._id === id);
      if (indexToRemove !== null && indexToRemove !== undefined) {
        const moviesCopy = [...movies];
        moviesCopy.splice(indexToRemove, 1);
        setMovies([...moviesCopy]);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return {
    movies,
    getAllMovies,
    getSingleMovie,
    deleteMovie,
    watchedMovie,
  };
}