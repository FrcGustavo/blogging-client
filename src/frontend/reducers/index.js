const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_HOME':
      return {
        ...state,
        mainPost: action.payload,
      };
    default: return state;
  }
};

export default reducer;
