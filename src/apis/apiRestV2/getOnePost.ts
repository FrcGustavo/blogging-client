import { api } from './apibase';

export const getOnePost = async (uuid: string) => {
  const { data } = await api.get('/posts/' + uuid);
  return data.body;
};
