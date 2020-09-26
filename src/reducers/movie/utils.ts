import { Dispatch } from 'redux';
import * as actions from './actions';
// Api
import Api from '../../services/omdbapi';

export const getPages = (total: number, perPage: number = 10) => Math.ceil(total / perPage);

export const handleMovieSearch = async (dispatch: Dispatch, movieName: string) => {
  const api = new Api();
  const FIRST_PAGE = 1;

  try {
    const res = await api.getData(movieName, FIRST_PAGE);

    if (res.data?.Error) {
      dispatch(actions.setErrorMessage(res.data.Error));
      return;
    }

    const { Search, totalResults } = res.data;
    dispatch(
      actions.setSearchMovieData({
        currentPage: FIRST_PAGE,
        pages: getPages(+totalResults),
        movies: Search,
      })
    );

    console.log(res);
  } catch {
    dispatch(actions.setServiceStatus(false));
  }
};
