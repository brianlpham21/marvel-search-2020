import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import charactersReducer from './reducers/characters';

const store = createStore(
  combineReducers({
    characters: charactersReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
