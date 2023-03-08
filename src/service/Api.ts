import axios from 'axios';

const apiService = () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
};

export default apiService;
