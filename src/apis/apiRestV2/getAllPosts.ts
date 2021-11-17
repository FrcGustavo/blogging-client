import { api } from './apibase';

export const getAllPosts = async () => {
  const { data } = await api.get('/posts');
  return data.body;
};
