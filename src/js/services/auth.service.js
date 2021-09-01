import axios from "../plugins/axios";

/**
 * Fuction login.Make login request to API
 * @param {String} email
 * @param {String} password
 * @returns {Promise<void>}
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      `/auth/login`,
      JSON.stringify({ email, password })
    );
    console.log(response);
    return response;
  } catch {
    console.log(err);
    return Promise.reject(err);
  }
}
