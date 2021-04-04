import axios from 'axios';
import { apiV1 } from 'root/config';

const getAll = async (lang) => {
  const res = await axios.get(`${apiV1}/posts/?lang=${lang}`);
  const data = res.data;
  return data.body;
};

const getOne = async (slug, lang) => {
  const res = await axios.get(`${apiV1}/posts/${slug}?lang=${lang}`);
  const data = res.data;
  return data.body;
};

const save = async (data, id, token) => {
  if (id) return update(data, id, token);
  return create(data, token);
};

const create = async (data, token) => {
  const res = await axios({
    url: `${apiV1}/users/posts`,
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.body._id;
};

const update = async (data, slug, token) => {
  await axios({
    url: `${apiV1}/users/posts/${slug}`,
    method: 'PATCH',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return slug;
};

const publish = async (data, slug, token) => {
  const res = await axios({
    url: `${apiV1}/users/posts/${slug}`,
    method: 'PATCH',
    data: { ...data, isPublic: !data.isPublic },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return true;
};

export default {
  getAll,
  getOne,
  save,
  publish,
};
