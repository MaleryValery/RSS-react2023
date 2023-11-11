import { createContext, useContext, useMemo, useState } from 'react';
import { defaulContext } from '../utils/const/const';
import ISearchContextrProps from './ISearchContext';
import LocalStorageService from '../utils/LocalStorageService';
import ICardData from '../utils/interfaces/ICardData';
import ISearchProviderProps from './SearchProviderProps';

const SearchContext = createContext<ISearchContextrProps>(defaulContext);

function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('Search context is used outside of search provider');
  return context;
}

function SearchProvider(props: ISearchProviderProps) {
  const { children } = props;
  const [searchValue, setSearchValue] = useState(
    LocalStorageService.getData('searchValue') || ''
  );
  const [cardsList, setCardsList] = useState<ICardData[]>([]);

  const contextValues: ISearchContextrProps = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      cardsList,
      setCardsList,
    }),
    [searchValue, cardsList]
  );

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider, useSearchContext };
