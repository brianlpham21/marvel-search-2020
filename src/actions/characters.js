import axios from 'axios';
import store from '../store';

export function getCharacters(searchTerm) {
  store.dispatch({ type: 'SET_CHARACTERS_LOADING', payload: true });
  return axios({
    url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=b9387eb3d701ea1e371e1f554eb585c5',
    params: {
      ts: '1',
      hash: 'c516f34ed1b8c272e76721b1be1dfe71',
      nameStartsWith: searchTerm,
      limit: '5'
    },
  }).then(({ data }) => {
    store.dispatch({ type: 'LOAD_CHARACTER_INFORMATION', payload: data });
    store.dispatch({ type: 'SET_CHARACTERS_LOADING', payload: false });
  });
}
