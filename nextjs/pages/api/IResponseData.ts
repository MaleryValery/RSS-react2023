import ICardData from '../../utils/interfaces/ICardData';

interface IResponseData {
  data: ICardData[] | ICardData;
  meta: {
    pagination: {
      current: number;
      next: number;
      last: number;
      records: number;
    };
    copyright: string;
    generated_at: string;
  };
  links: {
    self: string;
    current: string;
    next: string;
    last: string;
  };
}

export default IResponseData;
