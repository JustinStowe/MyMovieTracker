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

export function addComment(commentData) {
  console.log("Comments", commentData);
  return sendRequest(BASE_URL, "POST", commentData);
}

export function updateUser(id) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT");
}
