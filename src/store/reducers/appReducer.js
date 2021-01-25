import { HANDLE_OPEN_MENU, ADD_POSTS, ADD_EDIT_POST, CLEAN_POSTS } from '../actions';

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
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