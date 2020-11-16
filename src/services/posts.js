import axios from 'axios'; 
import { api } from 'root/config';

const getAll = async () => {
  const res = await axios.get(`${api}/posts`);
  const data = res.data;
  return data.body;
}

export default {
  getAll
}