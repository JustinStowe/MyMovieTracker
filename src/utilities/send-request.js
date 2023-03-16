import { getToken } from "./user-services";

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  try {
    const options = { method };
    if (payload) {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(payload);
      // options.headers = { user: { id: 1234 } };
    }
    const token = getToken();
    if (token) {
      console.log(token);
      console.log("Options", options.headers);
      console.log("Payload", payload);
      // Ensure headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    console.log("res", res);
    if (res.ok) return res.json();
    console.log("Res.ok", res.ok);
  } catch (error) {
    console.log("res error", error);
    throw new Error("Bad Request");
  }
}
