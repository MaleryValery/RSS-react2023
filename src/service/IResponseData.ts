import ICardData from '../utils/interfaces/ICardData';

interface IResponseData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IData;
  next?: string | null;
  previous?: string | null;
}

export interface IData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICardData[];
}

export default IResponseData;
