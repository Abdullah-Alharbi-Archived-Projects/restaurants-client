import axios from "axios";
import storage from "./localStorage.service";

const API_URL = "http://localhost:8001/api/v1";

axios.interceptors.request.use(
  config => {
    const token = storage.getKey("token");

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  error => Promise.reject(error)
);

export const get = async (resource, id = false) => {
  const { data } = await axios.get(`${API_URL}/${resource}/${id ? id : ""}`);
  return data;
};

export const post = async (resource, data, id = false) => {
  const { data: result } = await axios({
    url: `${API_URL}/${resource}/${id ? id : ""}`,
    method: "POST",
    data
  });
  return result;
};

export const put = async (resource, data, id = false) => {
  const { data: result } = await axios({
    url: `${API_URL}/${resource}/${id ? id : ""}`,
    data,
    method: "PUT"
  });
  return result;
};

export const destroy = async (resource, id = false) => {
  const { data: result } = await axios.delete(
    `${API_URL}/${resource}/${id ? id : ""}`
  );
  return result;
};

export default {
  get,
  post,
  put,
  destroy
};
