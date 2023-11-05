import { Link, useLocation } from 'react-router-dom';
import classes from './Card.module.css';
import ICardProps from './ICardProps';
import img from '../../assets/images/no-img.png';

function Card(props: ICardProps) {
  const location = useLocation();

  const { card } = props;

  const image = card.attributes.image ? card.attributes.image : img;

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
        <img src={image} alt="hero" className={classes.cardImg} />
        <div className={classes.cardContent}>
          <span className={classes.cardTitleSmall}>{card.attributes.name}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
