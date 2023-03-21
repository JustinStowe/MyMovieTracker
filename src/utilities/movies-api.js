import sendRequest from "./send-request.js";

const BASE_URL = "/api/movies";

export function getAll() {
  return sendRequest(BASE_URL);
}
export function getAllComments() {
  return sendRequest(`${BASE_URL}/watched`);
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteById(id) {
  return sendRequest(`${BASE_URL}/remove/${id}`, "POST");
}

export function addMovie(movieData) {
  return sendRequest(BASE_URL, "POST", movieData);
}

export function updateUser(id) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT");
}
