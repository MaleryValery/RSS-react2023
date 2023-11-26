interface IResponseData<T> {
  data: T;
  meta: {
    pagination: {
      current: number;
      first: number;
      prev: number;
      next: number;
      last: number;
      records: number;
    };
    copyright: string;
    generated_at: string;
  };
  links: {
    self: string;
    first: string;
    prev: string;
    current: string;
    next: string;
    last: string;
  };
}

export default IResponseData;
