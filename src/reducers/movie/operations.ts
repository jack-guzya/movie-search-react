import * as actions from './actions';
// Utils
import * as utils from './utils';
// Api
import Api from '../../services/omdbapi';
// Types
import { TThunk } from '..';

const api = new Api();

export const searchMovie: TThunk<string> = (movieName) => async (dispatch, getState) => {
  dispatch(actions.setLoadingStatus(true));

  const FIRST_PAGE = 1;
  const movieData = await utils.handleRequest(dispatch, () => api.getData(movieName, FIRST_PAGE));
  if (!movieData) {
    return;
  }

  const { Search, totalResults } = movieData;
  dispatch(
    actions.setSearchMovieData({
      name: movieName,
      currentPage: FIRST_PAGE,
      pages: utils.getPages(+totalResults),
      movies: Search,
    })
  );
};
