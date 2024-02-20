import { Link, useParams } from 'react-router-dom';
import Loader from '../../UI/Loader/Loader';
import classes from './CardDetails.module.css';
import { useGetComicsByIdQuery } from '../../../service/apiService';
import img from '../../../assets/images/no-img.png';
import ErrorElement from '../../UI/ErrorElement/ErrorElement';

function CardDetails() {
  const { id } = useParams();

  const { isLoading, isError, data } = useGetComicsByIdQuery(Number(id!));
  const card = data?.data.results[0];

  const image = card?.thumbnail.path
    ? `${card.thumbnail.path}.${card.thumbnail.extension}`
    : img;

  return (
    <div className={classes.cardDetailsWrapper}>
      {!isLoading && isError && <ErrorElement />}
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && !!card && (
        <div className={classes.cardContentWrapper}>
          <h2 className={classes.cardDetailsTitle}>
            {card.title || 'unknown'}
          </h2>
          <div className={classes.cardDetailsImgBox}>
            <img
              className={classes.cardDetailsImg}
              src={image}
              alt={card.title}
            />
          </div>
          <div className={classes.cardDetailsText}>
            <p>{card.description}</p>
            {card.pageCount && card.pageCount > 0 && (
              <p>Pages: {card.pageCount}</p>
            )}
            {card.series?.resourceURI && <p>Series: {card.series.name}</p>}
            <Link to="/">
              <div className={classes.cardDetailsCloseBtn}>close</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
