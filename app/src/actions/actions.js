import axios from 'axios';

export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const toggleActive = () => {
    return { type: TOGGLE_ACTIVE }
};

export const fetchJokes = () => {
    return dispatch => {
        dispatch({ type: FETCH_JOKE });
        axios
          .get('https://official-joke-api.appspot.com/random_joke')
          .then(res => {
              console.log(res);
              dispatch({ type: FETCH_JOKE_SUCCESS });
          })
          .catch(err => {
              console.log(err);
              dispatch({ type: FETCH_JOKE_FAILURE });
          });
    };
};