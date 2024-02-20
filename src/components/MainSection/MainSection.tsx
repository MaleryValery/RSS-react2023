import { useAppSelector } from '../../redux/hook';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import classes from './MainSection.module.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';

import { useGetComicsListQuery } from '../../service/apiService';
import ErrorElement from '../UI/ErrorElement/ErrorElement';
import NotFound from '../NotFound/NotFound';

function MainSection() {
  const { value } = useAppSelector((state) => state.search);
  const { limit, offset } = useAppSelector((state) => state.limit);
  const { data, isError, isLoading, isFetching } = useGetComicsListQuery({
    value,
    limit,
    offset,
  });

  return (
    <div className={classes.mainSectionWrapper}>
      {(isLoading || isFetching) && <Loader />}
      <div className="main-wrapper">
        <SearchForm />
        {!isLoading && !isFetching && isError ? (
          <ErrorElement />
        ) : (
          data?.data.results &&
          data?.data.results.length > 0 && (
            <>
              <h2 className={classes.subTitle}>
                {data.data.total} Characters | {data.data.limit} Limit
                {data.data.offset} pages
              </h2>
              <CardsList list={data.data.results} />
              <Pagination data={data.data} />
            </>
          )
        )}
        {data?.data.results && data?.data.results.length === 0 && <NotFound />}
      </div>
    </div>
  );
}

export default MainSection;
