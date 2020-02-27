const initialState = {
  searchTerm: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'CLEAR_SEARCH_TERM':
      return initialState;
    default:
      return state;
  }
};
