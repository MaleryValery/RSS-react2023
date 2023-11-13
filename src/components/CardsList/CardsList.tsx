import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import classes from './CardsList.module.css';
import Card from '../Card/Card';
import SearchContext from '../../contexts/SearchContext';

function CardsList() {
  const { cardsList } = useContext(SearchContext);
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
