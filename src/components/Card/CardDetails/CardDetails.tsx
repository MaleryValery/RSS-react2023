import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../UI/Loader/Loader';
import classes from './CardDetails.module.css';
import { useGetCharacterByIdQuery } from '../../../service/apiService';
import img from '../../../assets/images/no-img.png';
import useActions from '../../../utils/hooks/dispatchActions';
import { useAppSelector } from '../../../redux/hook';
import ICardData from '../../../utils/interfaces/ICardData';
import ErrorElement from '../../UI/ErrorElement/ErrorElement';

function CardDetails() {
  const { id } = useParams();
  const { setDetailsLoader } = useActions();
  const isDetailsLoading = useAppSelector(
    (state) => state.loader.isDetailsLoading
  );

  const { isLoading, isError, data } = useGetCharacterByIdQuery(id!);

  const response = data?.data as ICardData;

  useEffect(() => {
    setDetailsLoader(isLoading);
  }, [isLoading, setDetailsLoader]);

  return (
    <div className={classes.cardDetailsWrapper}>
      {!isDetailsLoading && isError && <ErrorElement />}
      {isDetailsLoading && !isError && <Loader />}
      {!isDetailsLoading && !isError && !!response && (
        <div className={classes.cardContentWrapper}>
          <h2 className={classes.cardDetailsTitle}>
            {response?.attributes.name || 'unknown'}
          </h2>
          <div className={classes.cardDetailsImgBox}>
            <img
              className={classes.cardDetailsImg}
              src={response.attributes.image || img}
              alt="hero"
            />
          </div>
          <div className={classes.cardDetailsText}>
            <p>Family: {response.attributes.family_members[0] || 'unknown'}</p>
            <p>Gender: {response.attributes.gender || 'unknown'}</p>
            <p>Jobs: {response.attributes.jobs || 'unknown'}</p>
            <p>nationality: {response.attributes.nationality || 'unknown'}</p>
            <p>died: {response.attributes.died || 'unknown'}</p>
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
