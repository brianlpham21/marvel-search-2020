const initialState = {
  charactersLoading: false,
  comicsLoading: false,
  eventsLoading: false,
  videosLoading: false,
  noComics: false,
  noEvents: false,
  noVideos: false,
  list: [],
  selectedCharacter: {},
  comics: [],
  events: [],
  ytVideos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTER_INFORMATION':
      return { ...state, list: action.payload.data.results || [] };
    case 'SET_SELECTED_CHARACTER': {
      const character = state.list.find((character) => character.id === action.payload);
      return { ...state, selectedCharacter: character, list: [] };
    }
    case 'LOAD_COMICS': {
      let emptyStatus = false;
      const { results } = action.payload.data;
      if (results.length === 0) { emptyStatus = true; };
      return { ...state, comics: results || [], noComics: emptyStatus };
    }
    case 'LOAD_EVENTS': {
      let emptyStatus = false;
      const { results } = action.payload.data;
      if (results.length === 0) { emptyStatus = true; };
      return { ...state, events: results || [], noEvents: emptyStatus };
    }
    case 'LOAD_VIDEOS': {
      let emptyStatus = false;
      const { items } = action.payload;
      if (items.length === 0) { emptyStatus = true; };
      return { ...state, ytVideos: items || [], noEvents: emptyStatus };
    }
    case 'SET_CHARACTERS_LOADING':
      return { ...state, charactersLoading: action.payload };
    case 'SET_COMICS_LOADING':
      return { ...state, comicsLoading: action.payload };
    case 'SET_EVENTS_LOADING':
      return { ...state, eventsLoading: action.payload };
    case 'SET_VIDEOS_LOADING':
      return { ...state, videosLoading: action.payload };
    case 'CLEAR_CHARACTERS_LIST':
      return { ...state, list: [] };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};
