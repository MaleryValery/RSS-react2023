import { Component } from 'react';
import HeroListProps from '../../interfaces/HeroListProps';
import HeroCard from '../HeroCard/HeroCard';
import classes from './HeroesList.module.css';

class HeroesList extends Component<HeroListProps> {
  public render() {
    const { heroes } = this.props;
    return (
      <div className={classes.wrapperHeros}>
        {heroes.map((item) => (
          <HeroCard key={Number(item.id)} hero={item} />
        ))}
      </div>
    );
  }
}
export default HeroesList;
