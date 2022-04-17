import axios from 'axios';
import { api, apiKey } from 'root/config';

type Post = {
  cover: string
  title: string
  description: string
  href: string
}
type Posts = Post[]
type GetAll = (props: { limit: number }) => Promise<{ posts: Posts }>

const getAll: GetAll = async ({ limit } = { limit: 9 })  => {
  const res = await axios.get(`${api}/posts?key=${apiKey}&limit=${limit}`);
  const posts = res.data.posts.map((post => ({
    cover: post.feature_image,
    title: post.title,
    description: post.meta_description,
    slug: post.slug,
  })))
  return {
    posts
  };
};

const getOne = async (slug, lang) => {
  const res = await axios.get(`${api}/posts/slug/${slug}?key=${apiKey}`);
  const data = res.data;
  return data.posts[0];
};

// const save = async (data, id, token) => {
//   if (id) return update(data, id, token);
//   return create(data, token);
// };

// const create = async (data, token) => {
//   const res = await axios({
//     url: `${apiV1}/users/posts`,
//     method: 'POST',
//     data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data.body._id;
// };

// const update = async (data, slug, token) => {
//   await axios({
//     url: `${apiV1}/users/posts/${slug}`,
//     method: 'PATCH',
//     data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return slug;
// };

// const publish = async (data, slug, token) => {
//   const res = await axios({
//     url: `${apiV1}/users/posts/${slug}`,
//     method: 'PATCH',
//     data: { ...data, isPublic: !data.isPublic },
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return true;
// };

export default {
  getAll,
  getOne,
  // save,
  // publish,
};
