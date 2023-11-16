import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalStorageService from '../../utils/LocalStorageService';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import Loader from '../UI/Loader/Loader';
import { getCharacters } from '../../service/apiService';
import Pagination from '../Pagination/Pagination';
import classes from './MainSection.module.css';
import { SERCH_KEY } from '../../utils/const/const';
import { RootState } from '../../redux';
import { setCardsList } from '../../redux/slices';

function MainSection() {
  const limit = useSelector((state: RootState) => state.limit.value);
  const cardsList = useSelector((state: RootState) => state.cardsList.value);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalCards, setTotalCards] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNexPage] = useState(false);

  const updateCardsSection = useCallback(async (): Promise<void> => {
    try {
      const value = LocalStorageService.getData(SERCH_KEY.searchValue);
      setIsLoading(true);
      setIsNexPage(false);
      const responseData = await getCharacters(value, limit, currentPage);
      if (responseData.data && responseData.data.length) {
        dispatch(setCardsList(responseData.data));
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
  }, [currentPage, limit]);

  useEffect(() => {
    updateCardsSection();
  }, [currentPage, limit, updateCardsSection]);

  let dataToShow: JSX.Element;
  if (cardsList.length && !error && !isLoading) {
    dataToShow = <CardsList />;
  } else if (!cardsList.length && !isLoading) {
    dataToShow = <div>Oooops.. i cannot find anything</div>;
  } else dataToShow = <Loader />;

  return (
    <div className={classes.mainSectionWrapper}>
      <div className="main-wrapper">
        <SearchForm
          updateCardsSection={updateCardsSection}
          page={setCurrentPage}
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
  );
}

export default MainSection;
