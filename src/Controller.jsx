import React, { createContext, useContext, useEffect, useState } from "react";
import * as movieApi from "./utilities/movies-api";
import * as userApi from "./utilities/user-api";
import * as commentsApi from "./utilities/comments-api";
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
  const [userMovies, setUserMovies] = useState([]);
  const [userWatchedMovies, setUserWatchedMovies] = useState([]);
  const [comments, setComments] = useState([]);
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);
  console.log("Control movies", movies);

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
      const results = await movieApi.getAll();
      console.log("all movies in con troller", results);
      setUserMovies([...results]);
      console.log("movies in controller after set", userMovies);
    } catch (error) {
      console.error(error);
    }
  }
  async function getAllWatchedMovies() {
    try {
      const results = await movieApi.getAllWatched();
      setUserWatchedMovies(results);
    } catch (error) {
      console.error(error);
    }
  }
  async function getSingleMovie(id) {
    try {
      const results = await movieApi.getById(id);
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function addMovies(movie) {
    try {
      const newMovie = await movieApi.addMovie(movie);
      setMovies((currentMovies) => [...currentMovies, newMovie]);
    } catch (error) {
      console.error(error);
    }
  }

  async function addComment(comment, movieId) {
    try {
      const newComment = await commentsApi.addComment(comment, movieId);
      setComments((current) => [...current, newComment]);
    } catch (error) {
      console.error(error);
    }
  }
  async function getAllComments() {
    try {
      const results = await commentsApi.getAllComments();
      setComments([...results]);
    } catch (error) {
      console.error(error);
    }
  }
  async function addFriend(friend) {
    try {
      const newFriend = await userApi.addFriend(friend);
      setComments((current) => [...current, newFriend]);
    } catch (error) {
      console.error(error);
    }
  }
  async function getAllFriends() {
    try {
      const results = await userApi.getAllFriends();
      setFriends([...results]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllUsers() {
    try {
      const results = await userApi.getAllUsers();
      setUsers([...results]);
    } catch (error) {
      console.error(error);
    }
  }
  // async function updateMovie(id, movie) {
  //   try {
  //     // console.log("Controller update movie", movie);
  //     const results = await movieApi.updateMovie(id, movie);
  //     console.log("Controller update movie", results);
  //     movie.completed = !movie.completed;
  //     return results;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function updateUser(id) {
    try {
      // console.log("Controller update movie", movie);
      const results = await movieApi.updateUser(id);
      console.log("Controller update movie", results);
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  // async function deleteMovie(id) {
  //   try {
  //     await movieApi.deleteById(id);
  //     const indexToRemove = movies.findIndex((movie) => movie._id === id);
  //     if (indexToRemove !== null && indexToRemove !== undefined) {
  //       const moviesCopy = [...movies];
  //       moviesCopy.splice(indexToRemove, 1);
  //       setMovies([...moviesCopy]);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async function deleteMovie(id) {
    try {
      const results = await movieApi.deleteById(id);
      console.log("Controller update movie", results);
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    users,
    friends,
    comments,
    movies,
    userMovies,
    userWatchedMovies,
    getAllMovies,
    getSingleMovie,
    deleteMovie,
    watchedMovie,
    // updateMovie,
    addMovies,
    updateUser,
    getAllWatchedMovies,
    addComment,
    getAllComments,
    getAllFriends,
    addFriend,
    getAllUsers,
  };
}
