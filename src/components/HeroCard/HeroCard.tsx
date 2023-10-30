import { Component } from 'react';
import HeroCardProps from '../../interfaces/HeroCard';
import classes from './HeroCard.module.css';

class HeroCard extends Component<HeroCardProps> {
  render() {
    const { hero } = this.props;
    return (
      <div className={classes.movieCard}>
        <img src={hero.image} alt={classes.heroImage} />
        <div className={classes.movieContent}>
          <span>Name: {hero.name}</span>
          <span>Status: {hero.status}</span>
          <span>Species: {hero.species}</span>
          <span>Gender: {hero.gender}</span>
          <span>Location: {hero.location.name}</span>
        </div>
      </div>
    );
  }
}

export default HeroCard;
