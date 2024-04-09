import axios from 'axios';

axios.defaults.withCredentials = true;

// Create axios instance setting base URL for API
const api = axios.create({
  baseURL: '/api',
});

export const getDataAPI = async (url, token) => {
  const res = await api.get(`/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url, post, token) => {
  let res;
  try {
    res = await api.post(`/${url}`, post, {
      headers: { Authorization: token },
    });
  } catch (error) {
    if (error.response) {
      console.error('Request failed:', error.response.data);
      res = error.response;
    } else {
      throw error;
    }
  }
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await api.put(`/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await api.patch(`/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await api.delete(`/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};