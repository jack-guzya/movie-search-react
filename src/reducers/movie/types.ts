export const SET_SEARCH_MOVIE_DATA = 'SET_SEARCH_MOVIE_DATA';
export const SET_DATA_OF_PAGE = 'SET_DATA_OF_PAGE';
export const SET_SERVICE_STATUS = 'SET_SERVICE_STATUS';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

export type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type TState = {
  serviceStatus: boolean;
  message: string | null;
  isLoading: boolean;
  currentPage: null | number;
  name: null | string;
  pages: null | number;
  movies: null | Array<TMovie>;
};

export type TSearchData = {
  name: string;
  pages: number;
  movies: Array<TMovie>;
  message: string
};

export type TPageData = {
  movies: Array<TMovie>;
  page: number;
};

type TSetSearchMovieData = {
  type: typeof SET_SEARCH_MOVIE_DATA;
  payload: TSearchData;
};

type TSetDataOfPage = {
  type: typeof SET_DATA_OF_PAGE;
  payload: TPageData;
};

type TSetServiceStatus = {
  type: typeof SET_SERVICE_STATUS;
  payload: {
    serviceStatus: boolean;
  };
};

type TSetErrorMessage = {
  type: typeof SET_MESSAGE;
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
  | TSetLoadingStatus
  | TSetDataOfPage;
