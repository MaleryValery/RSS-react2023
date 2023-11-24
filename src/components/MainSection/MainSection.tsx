import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hook';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import classes from './MainSection.module.css';
import Pagination from '../Pagination/Pagination';
import { useGetCharactersQuery } from '../../service/apiService';
import Loader from '../UI/Loader/Loader';
import PageNotFound from '../../pages/PageNotFound';
import ICardData from '../../utils/interfaces/ICardData';
import useActions from '../../utils/hooks/dispatchActions';

function MainSection() {
  const { value } = useAppSelector((state) => state.search);
  const { limitValue, pageValue } = useAppSelector((state) => state.limit);

  const { setMainLoader } = useActions();

  const {
    data: response,
    isError,
    isLoading,
    isFetching,
  } = useGetCharactersQuery({
    value,
    limitValue,
    pageValue,
  });

  useEffect(() => {
    setMainLoader(isLoading);
  }, [isLoading, setMainLoader]);

  return (
    <div className={classes.mainSectionWrapper}>
      <div className="main-wrapper">
        {(isLoading || isFetching) && <Loader />}
        <SearchForm />
        {!isLoading && !isFetching && isError ? (
          <PageNotFound />
        ) : (
          !!response && (
            <>
              <h2 className={classes.subTitle}>
                {response.meta.pagination.records} Characters |{' '}
                {response.meta.pagination.last ||
                  response.meta.pagination.current}{' '}
                pages
              </h2>
              <CardsList list={response.data as ICardData[]} />
              <Pagination isNextPage={!!response.meta.pagination.next} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default MainSection;
