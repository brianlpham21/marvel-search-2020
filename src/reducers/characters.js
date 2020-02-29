const initialState = {
  charactersLoading: false,
  selectedCharacter: {},
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTER_INFORMATION':
      return { ...state, list: action.payload.data.results || [] };
    case 'SET_SELECTED_CHARACTER': {
      const character = state.list.find((character) => character.id === action.payload);
      return { ...state, selectedCharacter: character, list: [] };
    }
    case 'SET_CHARACTERS_LOADING':
      return { ...state, charactersLoading: action.payload };
    case 'CLEAR_CHARACTERS_LIST':
      return { ...state, list: [] };;
    default:
      return state;
  }
};
