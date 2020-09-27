import * as types from './types';

const initialState: types.TState = {
  serviceStatus: true,
  message: null,
  name: null,
  pages: null,
  currentPage: null,
  movies: null,
  isLoading: false,
  isSearchError: false,
};

const reducer = (state = initialState, action: types.TAction): types.TState => {
  switch (action.type) {
    case types.SET_SEARCH_MOVIE_DATA:
      return {
        ...state,
        ...action.payload,
        currentPage: 1,
        isLoading: false,
        isSearchError: false,
      };

    case types.SET_DATA_OF_PAGE:
      return {
        ...state,
        movies: action.payload.movies,
        currentPage: action.payload.page,
        isLoading: false,
      };

    case types.SET_SERVICE_STATUS:
      return {
        ...state,
        serviceStatus: action.payload.serviceStatus,
        isLoading: false,
        isSearchError: true,
        message: 'Oops! The server is a little tired. Please try again later!',
      };

    case types.SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isSearchError: action.payload.isErrorSearch
      };

    case types.SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.status,
        serviceStatus: true,
      };

    default:
      return state;
  }
};

export default reducer;
