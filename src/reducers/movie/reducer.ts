import * as types from './types';

const initialState: types.TState = {
  serviceStatus: true,
  pages: null,
  currentPage: null,
  movies: null,
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
      };

    default:
      return state;
  }
};

export default reducer;
