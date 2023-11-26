import ICardData from '@/utils/interfaces/ICardData';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import IResponseData from '@/pages/api/IResponseData';
import Pagination from '../Pagination/Pagination';

function CardsList({ data }: { data: IResponseData<ICardData[]> }) {
  const totalCards = data.meta.pagination.records;
  const totalPages = data.meta.pagination.last ?? data.meta.pagination.current;

  const isData = !!data;

  return (
    <div className={styles.CardsPaginationWrapper}>
      <h3 className={styles.infoContext} data-testid="count-info">
        we have {`${totalCards}`} and {`${totalPages} pases`}
      </h3>
      <div className={styles.cardsListWrapper}>
        {isData &&
          data.data.map((item: ICardData) => (
            <Card key={item.id} card={item} />
          ))}
        {!isData && <h2 data-testid="error-message">nothing is found</h2>}
      </div>
      <Pagination isNextPage={!!data.meta.pagination.next} />
    </div>
  );
}

export default CardsList;
