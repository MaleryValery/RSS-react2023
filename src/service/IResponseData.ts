import ICardData from '../utils/interfaces/ICardData';

interface IResponseData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: ICardData[];
}

export default IResponseData;
