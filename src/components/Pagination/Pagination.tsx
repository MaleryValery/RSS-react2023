import CustomButton from '../UI/CustomButton/CustomButton';
import classes from './Pagination.module.css';
import useActions from '../../utils/hooks/dispatchActions';
import IPaginatinProps from './IPaginationProps';

function Pagination({ data }: IPaginatinProps) {
  const { setCurrentPage } = useActions();
  const { limit, offset, total } = data;

  const curPage = Math.floor(offset / limit) + 1;
  const totalPage = Math.ceil(total / limit);
  const pageNumbers = Array.from({ length: totalPage }).map((_, i) => i + 1);

  const onPrevButton = () => {
    const prevPage = offset - limit;
    setCurrentPage(prevPage);
  };

  const onNextButton = () => {
    const nextPage = offset + limit;
    setCurrentPage(nextPage);
  };

  const onChangePage = (pageNum: number) => {
    const newPage = pageNum * limit;
    setCurrentPage(newPage);
  };

  const onLastPage = () => {
    const lastPage = Math.trunc(total / limit) * limit;
    setCurrentPage(lastPage);
  };

  const generateButtons = () => {
    const currentPages = pageNumbers.slice(
      curPage < 3 ? 0 : curPage - 3,
      curPage < 3 ? 5 : curPage + 2
    );

    return currentPages.map((pageNum) => (
      <CustomButton
        key={pageNum}
        onClick={() => onChangePage(pageNum - 1)}
        title={pageNum.toString()}
        className={`${classes.pageBtn} ${
          curPage === pageNum ? classes.pageBtnActive : ''
        }`}
      />
    ));
  };

  return (
    <div className={classes.paginationControllers}>
      <CustomButton
        className={`${classes.arrowFirst} ${classes.arrow}`}
        onClick={() => onChangePage(0)}
        disabled={curPage === 1}
      />
      <CustomButton
        className={`${classes.arrowLeft} ${classes.arrow}`}
        onClick={onPrevButton}
        disabled={curPage === 1}
      />
      <div className={classes.pageNumbersBox}>{generateButtons()}</div>
      <CustomButton
        className={`${classes.arrowRigth} ${classes.arrow}`}
        onClick={onNextButton}
        disabled={curPage === Math.ceil(total / limit)}
      />
      <CustomButton
        className={`${classes.arrowLast} ${classes.arrow}`}
        onClick={onLastPage}
        disabled={total - offset - limit < 0}
      />
    </div>
  );
}

export default Pagination;
