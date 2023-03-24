import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  console.log(credentials);
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function getAllUsers() {
  return sendRequest(BASE_URL);
}

export function addFriend(friend) {
  return sendRequest(`${BASE_URL}/friends`, "PUT", friend);
}

export function getAllFriends() {
  return sendRequest(`${BASE_URL}/friends`);
}
