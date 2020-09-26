export const SET_SEARCH_MOVIE_DATA = 'SET_SEARCH_MOVIE_DATA';
export const SET_SERVICE_STATUS = 'SET_SERVICE_STATUS';

export type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type TSearchMovieData = {
  pages: null | number;
  currentPage: null | number;
  movies: null | Array<TMovie>;
};

export type TState = TSearchMovieData & {
  serviceStatus: boolean;
};

type TSetSearchMovieData = {
  type: typeof SET_SEARCH_MOVIE_DATA;
  payload: TSearchMovieData;
};

type TSetServiceStatus = {
  type: typeof SET_SERVICE_STATUS;
  payload: {
    serviceStatus: boolean;
  };
};

export type TAction = TSetSearchMovieData | TSetServiceStatus;