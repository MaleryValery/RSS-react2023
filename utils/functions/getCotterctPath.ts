type UrlQuery = {
  query: string | string[] | undefined;
  page: string | string[] | undefined;
  limit: string | string[] | undefined;
};

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
        id: id ? id : '',
        page: page || '1',
        limit: limit || '10',
        search: query || '',
      },
    };
  } else
    return {
      pathname: isDataisl ? '/details/[id]' : '/',
      query: {
        id: id ? id : '',
        page: page || '1',
        limit: limit || '10',
      },
    };
};

export default getCorrectPath;
