import axios from 'axios';

export const backendUrl = path => `${process.env.REACT_APP_BACKEND_URL}${path}`;

// get('/').then(res => res.data)
export const get = path =>
  axios.get(backendUrl(path), {
    withCredentials: true,
  });
