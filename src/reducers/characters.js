const initialState = {
  charactersLoading: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTER_INFORMATION':
      return { ...state, list: action.payload.data.results || [] };
    case 'SET_CHARACTERS_LOADING':
      return { ...state, charactersLoading: action.payload };
    case 'CLEAR_CHARACTERS':
      return initialState;
    default:
      return state;
  }
};
