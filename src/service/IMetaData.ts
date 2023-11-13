import IResponseData from './IResponseData';

interface IMetaData {
  data: IResponseData;
  status: number;
  statusText: string;
  headers: {
    'cache-control': string;
    'content-type': string;
    expires: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: [];
    transformResponse: [];
    timeout: 0;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {
      Blob: Blob;
      FormData: FormData;
    };
    headers: {
      Accept: string;
    };
    method: string;
    url: string;
  };
  request: XMLHttpRequest;
}

export default IMetaData;
