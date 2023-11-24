import { createContext } from 'react';
import { DEFAULT_CONTEXT } from '../utils/const/const';
import ISearchContextrProps from './ISearchContext';

const SearchContext = createContext<ISearchContextrProps>(DEFAULT_CONTEXT);

export default SearchContext;
