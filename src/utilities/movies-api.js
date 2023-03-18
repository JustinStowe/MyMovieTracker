import sendRequest from "./send-request.js";

const BASE_URL = "/api/movies";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addMovie(movieData) {
  console.log("Api movieData", movieData);
  return sendRequest(BASE_URL, "POST", movieData);
}

export function updateUser(id, userMovieData) {
  // movieData.completed = true;
  console.log("Updated mvie api", userMovieData);
  return sendRequest(`${BASE_URL}/${id}`, "PUT", userMovieData);
}
