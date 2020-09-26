export const SET_SEARCH_MOVIE_DATA = 'SET_SEARCH_MOVIE_DATA';
export const SET_SERVICE_STATUS = 'SET_SERVICE_STATUS';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

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
  errorMessage: string | null;
  isLoading: boolean;
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

type TSetErrorMessage = {
  type: typeof SET_ERROR_MESSAGE;
  payload: {
    message: string | null;
  };
};

type TSetLoadingStatus = {
  type: typeof SET_LOADING_STATUS;
  payload: {
    status: boolean;
  };
};

export type TAction =
  | TSetSearchMovieData
  | TSetServiceStatus
  | TSetErrorMessage
  | TSetLoadingStatus;
