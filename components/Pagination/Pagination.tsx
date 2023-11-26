import CustomButton from '../UI/CustomButton/CustomButton';
import styles from './Pagination.module.scss';
import useActions from '../../utils/hooks/dispatchActions';
import { useAppSelector } from '../../redux/hook';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

interface IPaginatinProps {
  isNextPage: boolean;
}

function Pagination({ isNextPage }: IPaginatinProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { setCurrentPage } = useActions();

  const params = new URLSearchParams(searchParams);

  const { pageValue } = useAppSelector((state) => state.limit);

  const onPrevButton = () => {
    const prevPage = pageValue - 1;
    params.set('page', prevPage.toString());
    replace(`${pathname}?${params.toString()}`);
    setCurrentPage(prevPage);
  };

  const onNextButton = () => {
    const nextPage = pageValue + 1;
    params.set('page', nextPage.toString());
    replace(`${pathname}?${params.toString()}`);
    setCurrentPage(nextPage);
  };

  return (
    <div className={styles.paginationControllers}>
      <CustomButton
        title="prev"
        className={styles.arrowLeft}
        onClick={onPrevButton}
        disabled={pageValue === 1}
      />
      <p>{pageValue}</p>
      <CustomButton
        title="next"
        className={styles.arrowRigth}
        onClick={onNextButton}
        disabled={!isNextPage}
      />
    </div>
  );
}

export default Pagination;
