/* eslint-disable import/prefer-default-export */
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
