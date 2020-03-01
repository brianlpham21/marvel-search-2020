import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import characters from './characters';
import search from './search';
import video from './video';

export default history => combineReducers({
  characters,
  search,
  video,
  router: connectRouter(history),
});
