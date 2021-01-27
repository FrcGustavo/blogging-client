import Router from 'next/router';
import {
  HANDLE_OPEN_MENU,
  ADD_POSTS,
  ADD_EDIT_POST,
  CLEAN_POSTS,
  LOGIN,
  LOGOUT
} from '../actions';

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case LOGOUT:{
      document.cookie = 'user=';
      Router.push('/login');
      const newState = { ...state, user: payload };
      return newState; 
    }
    case LOGIN: {
      const user = { token: payload.token, ...payload.user }; 
      const newState = { ...state, user };
      document.cookie = `user=${JSON.stringify(user)}`;
      Router.push('/dashboard');
      return newState;
    }
    case CLEAN_POSTS: {
      const newState = { ...state, posts: payload }
      return newState;
    }
    case ADD_EDIT_POST: {
      const editingPost = state.posts.find(({ id }) => id === payload);
      const newState = { ...state, editingPost };
      return newState;
    }
    case ADD_POSTS: {
      const newState = { ...state, posts: payload };
      return newState;
    }
    case HANDLE_OPEN_MENU:
      const newState = { ...state, isMenuOpen: payload };
      return newState;
    default:
      return state;
  }
}

export default appReducer;