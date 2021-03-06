import axios from "../plugins/axios";

export async function getCountries() {
  try {
    const response = await axios.get(`/location/get-countries`);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function getCities(index) {
  try {
    const response = await axios.get(`/location/get-cities/${index}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
