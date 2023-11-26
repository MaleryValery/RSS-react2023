import UrlQuery from '../types/UrlQuery';

const getCorrectPath = (
  urlRuery: UrlQuery,
  isDataisl: boolean,
  id?: string
) => {
  const { query, page, limit } = urlRuery;
  if (query) {
    return {
      pathname: isDataisl ? '/details/[id]' : '/',
      query: {
        query: query || '',
        page: page || '1',
        limit: limit || '10',
        id: id ? id : '',
      },
    };
  } else
    return {
      pathname: isDataisl ? '/details/[id]' : '/',
      query: {
        page: page || '1',
        limit: limit || '10',
        id: id ? id : '',
      },
    };
};

export default getCorrectPath;
