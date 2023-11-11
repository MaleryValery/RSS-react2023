import { v4 as uuidv4 } from 'uuid';
import classes from './CardsList.module.css';
import Card from '../Card/Card';
import { useSearchContext } from '../../contexts/SearchContext';

function CardsList() {
  const { cardsList } = useSearchContext();
  console.log('cardsList', cardsList);
  return (
    <div className={classes.cardsListWrapper}>
      {cardsList.map((item) => (
        <Card key={uuidv4()} card={item} />
      ))}
    </div>
  );
}
export default CardsList;
