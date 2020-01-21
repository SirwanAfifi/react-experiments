import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CHARACTER_PENDING,
  REQUEST_CHARACTER_SUCCESS,
  REQUEST_CHARACTER_FAILED
} from "./constants";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestCharacters = () => dispatch => {
  dispatch({ type: REQUEST_CHARACTER_PENDING });
  fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then(response => response.json())
    .then(data =>
      dispatch({ type: REQUEST_CHARACTER_SUCCESS, payload: data.results })
    )
    .catch(error =>
      dispatch({ type: REQUEST_CHARACTER_FAILED, payload: error })
    );
};
