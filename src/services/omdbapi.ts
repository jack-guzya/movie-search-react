type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type TError = {
  Error?: string;
};

export type TResponse<T> = {
  status: number;
  data: TError & {
    [K in keyof T]: T[K];
  };
};

export type TDataResponse = {
  Search: Array<TMovie>;
  totalResults: string;
};

export type TDetailsResponse = {
  Actors: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Title: string;
  Type: string;
  Year: string;
  imdbRating: string;
};

// export type TResponse = TDataResponse | TDetailsResponse;

type TGetData = (input: string, page?: number) => Promise<TResponse<TDataResponse>>;

type TGetMovieDetails = (id: string) => Promise<TResponse<TDetailsResponse>>;

class OmdbApiService {
  constructor(private root = 'https://www.omdbapi.com/', private key = '89ce318c') {
    this.root = root;
    this.key = key;
  }

  private createRequest = async (path: string) => {
    const request = await fetch(`${this.root}${path}&apikey=${this.key}`);

    if (request.status !== 200) {
      return {
        status: request.status,
        data: { Error: `request to ${request.url} failed! (status: ${request.status})` },
      };
    }
    const response = await request.json();

    return { status: request.status, data: response };
  };

  getData: TGetData = async (input, page = 1) => this.createRequest(`?s=${input}&page=${page}`);

  getImdb: TGetMovieDetails = async (id) => this.createRequest(`?i=${id}`);
}

export default OmdbApiService;
