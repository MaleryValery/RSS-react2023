import { useEffect, useState } from 'react';
import { Link, LoaderFunction, defer, useParams } from 'react-router-dom';
import ICardData from '../../../utils/interfaces/ICardData';
import Loader from '../../UI/Loader/Loader';
import IDetailsIdParams from '../IDetailsIdParams';
import ApiService from '../../../service/ApiService';
import classes from './CardDetails.module.css';

export function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = useState<ICardData>();
  const [isLoading, setIsLoading] = useState(false);

  const getOneCardData = async (cardId?: string) => {
    try {
      setIsLoading(true);
      if (cardId) {
        const cardData = await ApiService.getCharactersById(+cardId);
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
          <h2 className={classes.cardDetailsTitle}>{card.name}</h2>
          <div className={classes.cardDetailsImgBox}>
            <img
              className={classes.cardDetailsImg}
              src={card.image}
              alt="hero"
            />
          </div>
          <div className={classes.cardDetailsText}>
            <p>Episodes: {card.episode.length}</p>
            <p>Location: {card.location.name}</p>
            <p>From: {card.origin.name}</p>
            <p>Species: {card.species}</p>
            <p>Status: {card.status}</p>
            <Link to="/">
              <div className={classes.cardDetailsCloseBtn}>close ❌</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export const cardDetailsLoader: LoaderFunction<IDetailsIdParams> = async ({
  params,
}) => {
  const { id } = params;

  if (!id) return null;

  return defer({ card: ApiService.getCharactersById(+id) });
};
