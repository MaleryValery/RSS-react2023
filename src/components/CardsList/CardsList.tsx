import ICardListProps from './ICardsListProps';
import classes from './CardsList.module.css';
import Card from '../Card/Card';

function CardsList(props: ICardListProps) {
  const { list } = props;
  return (
    <div className={classes.cardsListWrapper}>
      {list.map((item) => (
        <Card key={Number(item.id)} card={item} />
      ))}
    </div>
  );
}
export default CardsList;
