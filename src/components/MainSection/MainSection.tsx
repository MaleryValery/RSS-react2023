import { useCallback, useEffect, useState } from 'react';
import ICardData from '../../utils/interfaces/ICardData';
import LocalStorageService from '../../utils/LocalStorageService';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import Loader from '../UI/Loader/Loader';
import ApiService from '../../service/apiService';

function MainSection() {
  const [cardsList, setCardsList] = useState<ICardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalCards, setTotalCards] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const updateCardsSection = useCallback(
    async (value?: string): Promise<void> => {
      try {
        setIsLoading(true);
        setCardsList([]);
        const responseData = await ApiService.getCharacters(value, currentPage);
        if (responseData.results.length) {
          setCardsList(responseData.results);
          setTotalPages(responseData.info.pages);
          console.log(totalPages);
          setError('');
          setTotalCards(responseData.info.count);
        }
      } catch (err) {
        setTotalCards(0);
        setCardsList([]);
        setError((err as Error).message ?? 'cannot get list of cards');
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    const inputValue = LocalStorageService.getData('searchValue') || '';
    updateCardsSection(inputValue);
  }, [updateCardsSection]);

  let dataToShow: JSX.Element;
  if (cardsList.length && !error) {
    dataToShow = <CardsList list={cardsList} />;
  } else if (!cardsList.length && !isLoading) {
    dataToShow = <div>Oooops.. {error}</div>;
  } else dataToShow = <Loader />;

  return (
    <div>
      <h3>{`we have ${totalCards || 0} ${
        LocalStorageService.getData('searchValue') || 'Charactores'
      }`}</h3>
      <div className="main-wrapper">
        <SearchForm
          updateCardsSection={updateCardsSection}
          page={setCurrentPage}
        />
        <div>
          <div>
            <div>{dataToShow}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
