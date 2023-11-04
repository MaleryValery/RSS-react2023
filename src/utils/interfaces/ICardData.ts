import TypeLocation from '../types/TypeLocation';

interface ICardData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TypeLocation;
  location: TypeLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default ICardData;
