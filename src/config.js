import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fainawaterproject.herokuapp.com/api',
});
