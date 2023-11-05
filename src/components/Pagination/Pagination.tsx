import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomButton from '../UI/CustomBotton/CustomButton';
import IPaginatinProps from './IPaginationProps';
import classes from './Pagination.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import SELECT_OPTIONS from '../../utils/const/const';

function Pagination(props: IPaginatinProps) {
  const { currentPage, setCurrentPage, isNextPage } = props;
  const [search, setSearch] = useSearchParams();
  const navigation = useNavigate();

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
    <div className={classes.paginationControllers}>
      <CustomButton
        className={classes.arrowLeft}
        onClick={onPrevButton}
        disabled={currentPage === 1}
      />
      <p>{currentPage}</p>
      <CustomButton
        className={classes.arrowRigth}
        onClick={onNextButton}
        disabled={!isNextPage}
      />
      <CustomSelect
        items={SELECT_OPTIONS}
        defaultValue={SELECT_OPTIONS[0]}
        classNameSelect={classes.searshSelect}
        classNameOpt={classes.searshOption}
        onChange={() => {
          navigation('/');
        }}
      />
    </div>
  );
}

export default Pagination;
