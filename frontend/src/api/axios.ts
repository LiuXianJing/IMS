import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
 
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 3 * 1000,
  headers: {'X-Custom-Header': 'xxx'}
});
 
instance.interceptors.request.use(config => {
  const userInfoStr = localStorage.getItem('userInfo',)
  const userInfo = userInfoStr ? JSON.parse(userInfoStr) : undefined
  if (userInfo && userInfo.token) {
    config.headers['Authorization'] = `Bearer ${userInfo.token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
 
instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
}, (error: AxiosError ) => {
  const errResData: any = error?.response?.data
  if(error?.response?.status == 401 || errResData?.code == 401) {
    console.log(errResData.msg);
    message.error('No permission, please log in to operate')
  }
  return Promise.reject(error);
});

export default instance