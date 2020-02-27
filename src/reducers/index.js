import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import characters from './characters';
import search from './search';

export default history => combineReducers({
  characters,
  search,
  router: connectRouter(history),
});
