import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import charactersReducer from './reducers/characters';
import searchReducer from './reducers/search';

const store = createStore(
  combineReducers({
    characters: charactersReducer,
    search: searchReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
