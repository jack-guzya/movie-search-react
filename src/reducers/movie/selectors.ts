import { TAppStateType } from '..';

export const getMessage = (state: TAppStateType) => state.movie.message;
export const getMovies = (state: TAppStateType) => state.movie.movies;
export const getCurrentPage = (state: TAppStateType) => state.movie.currentPage;
export const getCountPages = (state: TAppStateType) => state.movie.pages;
export const getLoadingStatus = (state: TAppStateType) => state.movie.isLoading;
export const getErrorSearchStatus = (state: TAppStateType) => state.movie.isSearchError;
