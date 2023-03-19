import sendRequest from "./send-request.js";

const BASE_URL = "/api/movies";

export function getAll() {
  return sendRequest(BASE_URL);
}
export function getAllWatched() {
  return sendRequest(`${BASE_URL}/watched`);
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteById(id) {
  return sendRequest(`${BASE_URL}/remove/${id}`, "POST");
}

export function addMovie(movieData) {
  console.log("Api movieData", movieData);
  return sendRequest(BASE_URL, "POST", movieData);
}

export function updateUser(id) {
  // movieData.completed = true;
  // console.log("Updated movie api", userMovieData);
  return sendRequest(`${BASE_URL}/${id}`, "PUT");
}
