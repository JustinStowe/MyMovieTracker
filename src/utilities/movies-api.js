import sendRequest from "./send-request.js";

const BASE_URL = "/api/movies";

export default function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
