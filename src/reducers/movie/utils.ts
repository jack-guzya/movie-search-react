/* eslint-disable consistent-return */
import { Dispatch } from 'redux';
import * as actions from './actions';
// Api
import { TResponse } from '../../services/omdbapi';

export const getPages = (total: number, perPage: number = 10) => Math.ceil(total / perPage);

export const handleRequest = async <R>(
  dispatch: Dispatch,
  request: () => Promise<TResponse<R>>
): Promise<R | undefined> => {
  try {
    dispatch(actions.setLoadingStatus(true));
    const res = await request();

    if (res.data.Error) {
      dispatch(actions.setMessage({ message: res.data.Error, isErrorSearch: true }));
      return;
    }

    return res.data;
  } catch {
    dispatch(actions.setServiceStatus(false));
  }
};
