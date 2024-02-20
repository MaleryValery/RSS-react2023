import { Link, useLocation } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';
import ICardProps from './ICardProps';
import img from '../../assets/images/cover_image.jpg';
import classes from './Card.module.css';
import getShortName from '../../utils/functions/getShortName';

function Card(props: ICardProps) {
  const location = useLocation();

  const { card } = props;

  const image = card.thumbnail.path
    ? `${card.thumbnail.path}.${card.thumbnail.extension}`
    : img;

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname.includes('details')) {
        event.preventDefault();
      }
    },
    [location.pathname]
  );

  return (
    <Link
      to={`/${card.id}`}
      data-testid="card-list-character"
      onClick={handleClick}
    >
      <div className={classes.movieCard}>
        <img src={image} alt="hero" className={classes.cardImg} />
        <div className={classes.cardContent}>
          <span
            data-testid="card-character-name"
            className={classes.cardTitleSmall}
          >
            {getShortName(card.title)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
