import classes from './Card.module.css';
import ICardProps from './ICardProps';

function Card(props: ICardProps) {
  const { card } = props;
  return (
    <div className={classes.movieCard}>
      <img
        src={card.image}
        alt={classes.heroImage}
        className={classes.cardImg}
      />
      <div className={classes.movieContent}>
        <span className="text-black text-lg font-medium tracking-wide text-center px-1">
          {card.name}
        </span>
      </div>
    </div>
  );
}

export default Card;
