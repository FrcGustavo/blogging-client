import axios from 'axios'; 
import { api } from 'root/config';

const getAll = async () => {
  const res = await axios.get(`${api}/posts`);
  const data = res.data;
  return data.body;
}

const getOne = async (slug) => {
  const res = await axios.get(`http://localhost:5000/api/posts/${slug}`);
  const data = res.data;
  return data.body;
}

export default {
  getAll,
  getOne
}