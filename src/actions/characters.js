import axios from 'axios';
import store from '../store';

export function getDogs(countyfips, planId) {
  return axios({
    url: 'https://dog.ceo/api/breeds/image/random',
  }).then((response) => {
    store.dispatch({ type: 'LOAD_CHARACTER_INFORMATION', payload: response });
  });
}
