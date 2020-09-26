import * as types from './types';

const initialState: types.TState = {
  serviceStatus: true,
  errorMessage: null,
  name: null,
  pages: null,
  currentPage: null,
  movies: null,
  isLoading: false,
};

const reducer = (state = initialState, action: types.TAction): types.TState => {
  switch (action.type) {
    case types.SET_SEARCH_MOVIE_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case types.SET_SERVICE_STATUS:
      return {
        ...state,
        serviceStatus: action.payload.serviceStatus,
        isLoading: false,
      };

    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.message,
        isLoading: false,
      };

    case types.SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.status,
        serviceStatus: true
      };

    default:
      return state;
  }
};

export default reducer;
