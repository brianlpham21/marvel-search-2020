const initialState = {
  ytVideo: '',
  modalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_YOUTUBE_VIDEO':
      return { ...state, ytVideo: action.payload };
    case 'TOGGLE_VIDEO_MODAL':
      return { ...state, modalOpen: !state.modalOpen };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};
