import * as actions from './actions';
// Utils
import * as utils from './utils';
// Api
import Api from '../../services/omdbapi';
// Types
import { TThunk } from '..';

const api = new Api();

export const searchMovie: TThunk<string> = (movieName) => async (dispatch, getState) => {
  if (!movieName) {
    dispatch(actions.setMessage('Enter a title of a movie'));
    return;
  }

  const movieData = await utils.handleRequest(dispatch, () => api.getData(movieName));
  if (!movieData) {
    return;
  }

  const { Search, totalResults } = movieData;
  dispatch(
    actions.setSearchMovieData({
      name: movieName,
      pages: utils.getPages(+totalResults),
      movies: Search,
      message: `Your searched for: ${movieName}, ${totalResults} results found`,
    })
  );
};

export const selectPage: TThunk<number> = (page) => async (dispatch, getState) => {
  const { movie } = getState();

  const movieData = await utils.handleRequest(dispatch, () =>
    api.getData(movie.name as string, page)
  );
  if (!movieData) {
    return;
  }

  const { Search } = movieData;
  dispatch(
    actions.setDataOfPage({
      page,
      movies: Search,
    })
  );
};
