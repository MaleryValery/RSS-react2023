class ApiService {
  private static key = '4737fbe6';

  private static baseUrl = `https://www.omdbapi.com/?apikey=${this.key}&s=`;

  public static getMovies = async (value: string) => {
    const resp = await fetch(`${this.baseUrl}${value}`);
    const dataRes = await resp.json();

    return dataRes.Search;
  };
}

export default ApiService;
