interface ICardData {
  id: number;
  title: string;
  description?: string;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  pageCount?: number;
  type: string;
  modified: string;
  thumbnail: PathImages;
  images?: PathImages;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  series?: Item;
  comics: Comics;
  events: Events;
  next?: string;
  previous?: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface PathImages {
  path: string;
  extension: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Events {
  available: number;
  collectionURI: string;
  items?: Item;
  returned: number;
}

export default ICardData;
