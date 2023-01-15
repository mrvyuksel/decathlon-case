import axios from "axios";

const API = "https://dummyapi.io/data/v1";
const ID = "63c1715614c6d633103a69bd";

export const getPost = (size,page) => {
  return axios
    .get(`${API}/post?limit=${size}&page=${page}`, {
        headers: {
            "app-id": `${ID}`
        }
    })
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const getUsers = (size,page) => {
    return axios
      .get(`${API}/user?limit=${size}&page=${page}`, {
          headers: {
              "app-id": `${ID}`
          }
      })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  };

  export const getUserDetail = (userId) => {
    return axios
      .get(`${API}/user/${userId}`, {
          headers: {
              "app-id": `${ID}`
          }
      })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  };
