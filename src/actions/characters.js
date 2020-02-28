import axios from 'axios';
import store from '../store';

export function getDogs(countyfips, planId) {
  return axios({
    url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=b9387eb3d701ea1e371e1f554eb585c5',
  }).then((response) => {
    store.dispatch({ type: 'LOAD_CHARACTER_INFORMATION', payload: response });
  });
}
