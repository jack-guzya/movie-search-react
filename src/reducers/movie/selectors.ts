import { TAppStateType } from '..';

export const getMessage = (state: TAppStateType) => state.movie.message;
export const getMovies = (state: TAppStateType) => state.movie.movies;
