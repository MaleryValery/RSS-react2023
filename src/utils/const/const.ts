import { md5 } from 'js-md5';
import { ICustomNavItem } from '../../components/UI/Nav/ICustomNavProps';

export const SELECT_OPTIONS = [5, 10, 15, 20];

export const DEFAULT_CONTEXT = {
  searchValue: '',
  cardsList: [],
  setSearchValue: () => {},
  setCardsList: () => {},
};

export const SERCH_KEY = {
  searchValue: 'searchValue',
};

export const BASE_URL = `https://gateway.marvel.com/v1/public/`;
export const ENDPOINT = {
  comics: 'comics',
  series: 'series',
};
export const SEARCH_TYPE = {
  titleStartsWith: `titleStartsWith`,
};

export const NAV_ITEMS: ICustomNavItem[] = [
  { navItemTitle: 'Comics', navItemId: 1 },
  { navItemTitle: 'Series', navItemId: 2 },
];
export const AUTH_ITEMS: ICustomNavItem[] = [
  { navItemTitle: 'SignIn', navItemId: 1 },
  { navItemTitle: 'SignUp', navItemId: 2 },
];

export const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
export const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;

export const TS = Date.now();

export const HASH = md5(`${TS}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`);
