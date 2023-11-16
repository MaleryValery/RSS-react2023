import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import classes from './CardsList.module.css';
import Card from '../Card/Card';
import { RootState } from '../../redux';

function CardsList() {
  const cardsList = useSelector((state: RootState) => state.cardsList.value);
  return (
    <div className={classes.cardsListWrapper}>
      {!cardsList.length && 'cannot find anything'}
      {cardsList.map((item) => (
        <Card key={uuidv4()} card={item} />
      ))}
    </div>
  );
}
export default CardsList;
