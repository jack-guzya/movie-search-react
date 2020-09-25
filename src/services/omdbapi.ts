type TGetData = (input: string, page: number) => Promise<unknown>;

type TGetImdb = (id: string) => Promise<unknown>;

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
        message: `request to ${request.url} failed! (status: ${request.status})`,
      };
    }
    const response = await request.json();

    return { status: request.status, data: response };
  };

  getData: TGetData = async (input, page) => this.createRequest(`?s=${input}&page=${page}`);

  getImdb: TGetImdb = async (id) => this.createRequest(`?i=${id}`);
}

export default OmdbApiService;
