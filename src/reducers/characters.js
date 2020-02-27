const initialState = {
  link: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTER_INFORMATION':
      return { ...state, link: action.payload };
    case 'CLEAR_CHARACTERS':
      return state;
    default:
      return state;
  }
};
