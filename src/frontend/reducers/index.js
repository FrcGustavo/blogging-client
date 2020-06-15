const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_HOME':
      return {
        ...state,
        mainPost: action.payload,
      };
    case 'LOAD_BLOG':
      return {
        ...state,
        blog: action.payload,
      };
    case 'LOAD_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOAD_EDIT_POST':
      return {
        ...state,
        editPost: action.payload,
      };
    default: return state;
  }
};

export default reducer;
