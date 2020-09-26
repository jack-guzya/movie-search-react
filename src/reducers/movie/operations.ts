import * as actions from './actions';
// Utils
import { handleMovieSearch } from './utils';
// Types
import { TThunk } from '..';
import * as types from './types';

export const searchMovie: TThunk<string> = (movieName) => async (dispatch, getState) => {
  dispatch(actions.setLoadingStatus(true));
  handleMovieSearch(dispatch, movieName);
};
