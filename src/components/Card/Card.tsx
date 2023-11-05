import { Link, useLocation } from 'react-router-dom';
import classes from './Card.module.css';
import ICardProps from './ICardProps';

function Card(props: ICardProps) {
  const location = useLocation();

  const { card } = props;
  return (
    <Link
      to={`details/${card.id}`}
      onClick={(event) => {
        if (location.pathname.includes('details')) {
          event.preventDefault();
        }
      }}
    >
      <div className={classes.movieCard}>
        <img src={card.image} alt="hero" className={classes.cardImg} />
        <div className={classes.cardContent}>
          <span className={classes.cardTitleSmall}>{card.name}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
