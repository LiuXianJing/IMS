import axios, { AxiosRequestConfig } from 'axios';
 
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 2000,
  headers: {'X-Custom-Header': 'xxx'}
});
 
instance.interceptors.request.use(config => {
  const token = 'token';
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
 
instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default instance