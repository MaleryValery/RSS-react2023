import { useSearchParams } from 'react-router-dom';
import CustomButton from '../UI/CustomBotton/CustomButton';
import IPaginatinProps from './IPaginationProps';

function Pagination(props: IPaginatinProps) {
  const { currentPage, setCurrentPage, isNextPage } = props;
  const [search, setSearch] = useSearchParams();

  const setPage = (page: number) => {
    search.set('page', page.toString());
    setSearch(search);
  };

  const onPrevButton = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    setPage(prevPage);
  };

  const onNextButton = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setPage(nextPage);
  };

  return (
    <div>
      <CustomButton onClick={onPrevButton} disabled={currentPage === 1}>
        ⬅️
      </CustomButton>
      <p>{currentPage}</p>
      <CustomButton onClick={onNextButton} disabled={!isNextPage}>
        ➡️
      </CustomButton>
    </div>
  );
}

export default Pagination;
