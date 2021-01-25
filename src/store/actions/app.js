export const LOGIN = 'LOGIN';
export const login = (payload) => ({
  type: LOGIN, payload,
});

export const HANDLE_OPEN_MENU = 'HANDLE_OPEN_MENU';
export const handleOpenMenu = (payload) => ({
  type: HANDLE_OPEN_MENU, payload,
});

export const ADD_POSTS = 'ADD_POSTS';
export const addPosts = (payload) => ({
  type: ADD_POSTS, payload,
});

export const ADD_EDIT_POST = 'ADD_EDIT_POST';
export const addEditPost = (payload) => ({
  type: ADD_EDIT_POST, payload,
});

export const CLEAN_POSTS = 'CLEAN_POSTS';
export const cleanPosts = () => ({
  type: CLEAN_POSTS, payload: false,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT, payload: false,
}) 