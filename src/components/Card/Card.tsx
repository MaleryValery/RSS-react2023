import { Link, useLocation } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';
import ICardProps from './ICardProps';
import img from '../../assets/images/no-img.png';
import classes from './Card.module.css';

function Card(props: ICardProps) {
  const location = useLocation();

  const { card } = props;

  const image = card.attributes.image ? card.attributes.image : img;

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
      to={`details/${card.id}`}
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
            {card.attributes.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
