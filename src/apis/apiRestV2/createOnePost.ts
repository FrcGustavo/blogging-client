import { api } from './apibase';

export const createOnePost = async ({ title }: { title: string }) => {
  const { data } = await api.post('/posts', { title });
  return data.body;
};
