import sendRequest from "./send-request.js";

const BASE_URL = `api/movie/${imdbID}`;

export function deleteCommentById(imdbID) {
  return sendRequest(`${BASE_URL}`, "DELETE");
}

export function addComment(comment) {
  console.log("Add Comment", comment);
  return sendRequest(BASE_URL, "POST", comment);
}
