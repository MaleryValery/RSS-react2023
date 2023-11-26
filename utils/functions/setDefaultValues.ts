import UrlQuery from '../types/UrlQuery';

const setDefaultValues = (urlRuery: UrlQuery) => {
  const { query, page, limit } = urlRuery;
  return {
    value: (query as string) ?? '',
    limitValue: (limit as string) ?? '10',
    pageValue: (page as string) ?? '1',
  };
};

export default setDefaultValues;
