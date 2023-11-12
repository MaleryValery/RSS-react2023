import { useCallback, useEffect, useMemo, useState } from 'react';
import LocalStorageService from '../../utils/LocalStorageService';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import Loader from '../UI/Loader/Loader';
import { getCharacters } from '../../service/apiService';
import Pagination from '../Pagination/Pagination';
import classes from './MainSection.module.css';
import SearchContext from '../../contexts/SearchContext';
import ICardData from '../../utils/interfaces/ICardData';
import ISearchContextrProps from '../../contexts/ISearchContext';

function MainSection() {
  const [searchValue, setSearchValue] = useState(
    LocalStorageService.getData('searchValue') || ''
  );
  const [cardsList, setCardsList] = useState<ICardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [limit, setLimit] = useState(5);
  const [totalCards, setTotalCards] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNexPage] = useState(false);

  const updateCardsSection = useCallback(
    async (
      value?: string,
      pageLimit?: number,
      page?: number
    ): Promise<void> => {
      try {
        setIsLoading(true);
        setIsNexPage(false);
        const responseData = await getCharacters(value, pageLimit, page);
        if (responseData.data && responseData.data.length) {
          setCardsList(responseData.data);
          setTotalPages(responseData.meta.pagination.last);
          setError('');
          setTotalCards(responseData.meta.pagination.records);
          setIsNexPage(responseData.meta.pagination.next !== null);
        }
      } catch (err) {
        setTotalCards(0);
        setError((err as Error).message ?? 'cannot get list of cards');
      } finally {
        setIsLoading(false);
      }
    },
    [setCardsList]
  );

  useEffect(() => {
    const inputValue = LocalStorageService.getData('searchValue') || '';
    updateCardsSection(inputValue, limit, currentPage);
  }, [currentPage, limit, updateCardsSection]);

  const contextValues: ISearchContextrProps = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      cardsList,
      setCardsList,
    }),
    [cardsList, searchValue]
  );

  let dataToShow: JSX.Element;
  if (cardsList.length && !error && !isLoading) {
    dataToShow = <CardsList />;
  } else if (!cardsList.length && !isLoading) {
    dataToShow = <div>Oooops.. i cannot find anything</div>;
  } else dataToShow = <Loader />;

  return (
    <SearchContext.Provider value={contextValues}>
      <div className={classes.mainSectionWrapper}>
        <div className="main-wrapper">
          <SearchForm
            updateCardsSection={updateCardsSection}
            page={setCurrentPage}
            setLimit={setLimit}
            limit={limit}
          />
          <h3 className={classes.subTitle}>{`we have ${totalCards || 0} ${
            LocalStorageService.getData('searchValue') || 'Charactores'
          }`}</h3>
          <div className={classes.cardsSection}>
            <div>
              <div>{dataToShow}</div>

              {cardsList && (
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                  isNextPage={isNextPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default MainSection;
