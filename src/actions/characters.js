import axios from 'axios';
import {store} from '../store';

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

export function getCharacterComics(id) {
  store.dispatch({ type: 'SET_COMICS_LOADING', payload: true });
  return axios({
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}/comics`,
    params: {
      apikey: 'b9387eb3d701ea1e371e1f554eb585c5',
      ts: '1',
      hash: 'c516f34ed1b8c272e76721b1be1dfe71',
      limit: 3
    },
  }).then(({ data }) => {
    store.dispatch({ type: 'LOAD_COMICS', payload: data });
    store.dispatch({ type: 'SET_COMICS_LOADING', payload: false });
  });
}

export function getCharacterEvents(id) {
  store.dispatch({ type: 'SET_EVENTS_LOADING', payload: true });
  return axios({
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}/events`,
    params: {
      apikey: 'b9387eb3d701ea1e371e1f554eb585c5',
      ts: '1',
      hash: 'c516f34ed1b8c272e76721b1be1dfe71',
      limit: 3
    },
  }).then(({ data }) => {
    store.dispatch({ type: 'LOAD_EVENTS', payload: data });
    store.dispatch({ type: 'SET_EVENTS_LOADING', payload: false });
  });
}

export function getYouTubeVideos(name) {
  store.dispatch({ type: 'SET_VIDEOS_LOADING', payload: true });
  return axios({
    url: `https://www.googleapis.com/youtube/v3/search/`,
    params: {
      part: 'snippet',
      key: 'AIzaSyAXHPX6gbbXVfi3RpN3XlKxWF_LS2bxPAk',
      q: `marvel ${name}`,
      maxResults: 3
    },
  }).then(({ data }) => {
    store.dispatch({ type: 'LOAD_VIDEOS', payload: data });
    store.dispatch({ type: 'SET_VIDEOS_LOADING', payload: false });
  });
}
