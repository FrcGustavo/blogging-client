/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const loadHome = (payload) => ({
  type: 'LOAD_HOME',
  payload,
});

export const loadBlog = (payload) => ({
  type: 'LOAD_BLOG',
  payload,
});

export const loadCurrentPost = (payload) => ({
  type: 'LOAD_CURRENT_POST',
  payload,
});

export const login = (payload) => ({
  type: 'LOGIN',
  payload,
});

export const loginUser = ({ email, password }, redirectUrl) => (dispatch) => {
  axios({
    url: '/auth/login',
    method: 'post',
    auth: {
      username: email,
      password,
    },
  })
    .then(({ data }) => {
      document.cookie = `email=${data.user.email}`;
      document.cookie = `username=${data.user.username}`;
      document.cookie = `id=${data.user.id}`;
      dispatch(login(data.user));
    })
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch(() => {});
};
