import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CHARACTER_PENDING,
  REQUEST_CHARACTER_SUCCESS,
  REQUEST_CHARACTER_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchCharacter = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateCharacters = {
  isPending: false,
  characters: [],
  error: ""
};
export const requestCharacter = (
  state = initialStateCharacters,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_CHARACTER_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CHARACTER_SUCCESS:
      return { ...state, characters: action.payload, isPending: false };
    case REQUEST_CHARACTER_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
