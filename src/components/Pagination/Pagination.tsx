import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import CustomButton from '../UI/CustomButton/CustomButton';
import classes from './Pagination.module.css';
import useActions from '../../utils/hooks/dispatchActions';
import { useAppSelector } from '../../redux/hook';
import IPaginatinProps from './IPaginationProps';

function Pagination({ isNextPage }: IPaginatinProps) {
  const { setCurrentPage } = useActions();
  const { pageValue } = useAppSelector((state) => state.limit);
  const [, setSearchParams] = useSearchParams();

  const onPrevButton = () => {
    const prevPage = +pageValue - 1;
    setCurrentPage(String(prevPage));
  };

  const onNextButton = () => {
    const nextPage = +pageValue + 1;
    setCurrentPage(String(nextPage));
  };

  useEffect(() => {
    setSearchParams(`?page=${pageValue}`);
  }, [setSearchParams, pageValue]);

  return (
    <div className={classes.paginationControllers}>
      <CustomButton
        title=""
        className={classes.arrowLeft}
        onClick={onPrevButton}
        disabled={pageValue === '1'}
      />
      <p>{pageValue}</p>
      <CustomButton
        title=""
        className={classes.arrowRigth}
        onClick={onNextButton}
        disabled={!isNextPage}
      />
    </div>
  );
}

export default Pagination;
