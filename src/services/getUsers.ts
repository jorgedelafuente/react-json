import { AxiosError } from 'axios';
import apiService from './Api';

const getPosts = async () => {
  try {
    const response = await apiService().get('users');
    return response.data;
  } catch (_err) {
    let err = _err as AxiosError;
    throw new Error(err.message);
  }
};

export default getPosts;
