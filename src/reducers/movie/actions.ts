import * as types from './types';

export const setSearchMovieData = (data: types.TSearchData): types.TAction => ({
  type: types.SET_SEARCH_MOVIE_DATA,
  payload: data,
});

export const setDataOfPage = (data: types.TPageData): types.TAction => ({
  type: types.SET_DATA_OF_PAGE,
  payload: data,
});

export const setServiceStatus = (status: boolean): types.TAction => ({
  type: types.SET_SERVICE_STATUS,
  payload: {
    serviceStatus: status,
  },
});

export const setMessage = ({ message, isErrorSearch = false }: types.TMessage): types.TAction => ({
  type: types.SET_MESSAGE,
  payload: {
    message,
    isErrorSearch,
  },
});

export const setLoadingStatus = (status: boolean): types.TAction => ({
  type: types.SET_LOADING_STATUS,
  payload: {
    status,
  },
});

export const setDetails = (details: types.Partial<types.TDetails>): types.TAction => ({
  type: types.SET_DETAILS,
  payload: {
    ...details,
  },
});
