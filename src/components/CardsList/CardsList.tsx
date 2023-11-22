import { v4 as uuidv4 } from 'uuid';
import Card from '../Card/Card';
import classes from './CardsList.module.css';
import ICardsListProps from './ICardsListProps';

function CardsList({ list }: ICardsListProps) {
  return (
    <div className={classes.cardsListWrapper}>
      {list.map((item) => (
        <Card key={uuidv4()} card={item} />
      ))}
    </div>
  );
}

export default CardsList;
