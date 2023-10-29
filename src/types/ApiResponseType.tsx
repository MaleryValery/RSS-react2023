import MovieObject from '../interfaces/Hero';

type ApiResponseType = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: MovieObject[];
};

export default ApiResponseType;
