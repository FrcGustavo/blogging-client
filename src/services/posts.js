import axios from 'axios'; 
import { api } from 'root/config';

const getAll = async () => {
  const res = await axios.get(`${api}/posts`);
  console.log(res);
  const data = res.data;
  return data.body;
}

export default {
  getAll
}