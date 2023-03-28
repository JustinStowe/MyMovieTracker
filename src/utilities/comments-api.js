import sendRequest from "./send-request.js";

const BASE_URL = "/api/comments";

export function getAllComments() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteById(id) {
  return sendRequest(`${BASE_URL}/remove/${id}`, "POST");
}

export function addComment(commentData, movieId) {
  console.log("Comments", commentData, movieId);
  return sendRequest(BASE_URL, "POST", {
    body: commentData,
    movieId: movieId,
  });
}

export function updateUser(id) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT");
}
