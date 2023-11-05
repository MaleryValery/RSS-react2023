import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ICardData from '../../../utils/interfaces/ICardData';
import Loader from '../../UI/Loader/Loader';
import classes from './CardDetails.module.css';
import ApiService from '../../../service/apiService';
import img from '../../../assets/images/no-img.png';

function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = useState<ICardData>();
  const [isLoading, setIsLoading] = useState(false);

  const getOneCardData = async (cardId?: string) => {
    try {
      setIsLoading(true);
      if (cardId) {
        const cardData = await ApiService.getCharactersById(cardId);
        setCard(cardData);
      }
    } catch (error) {
      throw new Error(`We got error: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneCardData(id);
  }, [id]);

  return (
    <div className={classes.cardDetailsWrapper}>
      {isLoading && <Loader />}
      {!isLoading && card && (
        <div className={classes.cardContentWrapper}>
          <h2 className={classes.cardDetailsTitle}>
            {card?.attributes.name || 'unknown'}
          </h2>
          <div className={classes.cardDetailsImgBox}>
            <img
              className={classes.cardDetailsImg}
              src={card.attributes.image || img}
              alt="hero"
            />
          </div>
          <div className={classes.cardDetailsText}>
            <p>Family: {card.attributes.family_members[0] || 'unknown'}</p>
            <p>Gender: {card.attributes.gender || 'unknown'}</p>
            <p>Jobs: {card.attributes.jobs || 'unknown'}</p>
            <p>nationality: {card.attributes.nationality || 'unknown'}</p>
            <p>died: {card.attributes.died || 'unknown'}</p>
            <Link to="/">
              <div className={classes.cardDetailsCloseBtn}>close ❌</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
