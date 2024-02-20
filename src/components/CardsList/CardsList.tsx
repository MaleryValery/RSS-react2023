import Card from '../Card/Card';
import classes from './CardsList.module.css';
import ICardsListProps from './ICardsListProps';

function CardsList({ list }: ICardsListProps) {
  return (
    <div className={classes.cardsListWrapper}>
      {list.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  );
}

export default CardsList;
