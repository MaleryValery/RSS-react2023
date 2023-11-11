import { createContext } from 'react';
import { defaulContext } from '../utils/const/const';
import ISearchContextrProps from './ISearchContext';

const SearchContext = createContext<ISearchContextrProps>(defaulContext);

export default SearchContext;
