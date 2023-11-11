import { v4 as uuidv4 } from 'uuid';
import ICardListProps from './ICardsListProps';
import classes from './CardsList.module.css';
import Card from '../Card/Card';

function CardsList(props: ICardListProps) {
  const { list } = props;
  return (
    <div className={classes.cardsListWrapper}>
      {list.map((item) => (
        <Card key={uuidv4()} card={item} />
      ))}
    </div>
  );
}
export default CardsList;
