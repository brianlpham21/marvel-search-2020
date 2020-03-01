const initialState = {
  ytVideo: '',
  modalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_YOUTUBE_VIDEO':
      return { ...state, ytVideo: action.payload };
    case 'OPEN_VIDEO_MODAL':
      return { ...state, modalOpen: true };
    case 'CLOSE_VIDEO_MODAL':
      return { ...state, modalOpen: false };
    case 'CLEAR_VIDEO':
      return initialState;
    default:
      return state;
  }
};
