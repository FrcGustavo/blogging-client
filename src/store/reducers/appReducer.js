import { HANDLE_OPEN_MENU } from '../actions';

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case HANDLE_OPEN_MENU:
      const newState = { ...state, isMenuOpen: payload };
      return newState;
    default:
      return state;
  }
}

export default appReducer;