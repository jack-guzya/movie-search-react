import * as types from './types';

export const setSearchMovieData = (data: types.TSearchMovieData): types.TAction => ({
  type: types.SET_SEARCH_MOVIE_DATA,
  payload: data,
});

export const setServiceStatus = (status: boolean): types.TAction => ({
  type: types.SET_SERVICE_STATUS,
  payload: {
    serviceStatus: status,
  },
});
