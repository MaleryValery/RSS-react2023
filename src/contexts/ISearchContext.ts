import { Dispatch, SetStateAction } from 'react';
import ICardData from '../utils/interfaces/ICardData';

interface ISearchContextrProps {
  searchValue: string;
  cardsList: ICardData[];
  setSearchValue: Dispatch<SetStateAction<string>>;
  setCardsList: Dispatch<SetStateAction<ICardData[]>>;
}

export default ISearchContextrProps;
