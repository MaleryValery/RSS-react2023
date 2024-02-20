import { useAppSelector } from '../../redux/hook';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import classes from './MainSection.module.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';

import { useGetComicsListQuery } from '../../service/apiService';
import ErrorElement from '../UI/ErrorElement/ErrorElement';

function MainSection() {
  const { value } = useAppSelector((state) => state.search);
  const { limit, offset } = useAppSelector((state) => state.limit);
  const { data, isError, isLoading, isFetching } = useGetComicsListQuery({
    value,
    limit,
    offset,
  });

  // setTotalPages(data?.data.total || 0);

  return (
    <div className={classes.mainSectionWrapper}>
      {(isLoading || isFetching) && <Loader />}
      <div className="main-wrapper">
        <SearchForm />
        {!isLoading && !isFetching && isError ? (
          <ErrorElement />
        ) : (
          !!data && (
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
      </div>
    </div>
  );
}

export default MainSection;
