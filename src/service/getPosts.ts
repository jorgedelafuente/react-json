import apiService from './Api';

const getPosts = async () => {
  const response = await apiService().get('posts');
  return response.data;
};

export default getPosts;
