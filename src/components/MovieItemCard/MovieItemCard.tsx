import { Component } from 'react';
import MovieCard from '../../interfaces/MovieCard';
import classes from './MovieItemCard.module.css';

class MovieItemCard extends Component<MovieCard> {
  render() {
    const { movie } = this.props;
    return (
      <div className={classes.movieCard}>
        <img src={movie.Poster} alt={classes.moviePoster} />
        <div className={classes.movieContent}>
          <span>Title: {movie.Title}</span>
          <span>Year: {movie.Year}</span>
          <span>Type: {movie.Type}</span>
        </div>
      </div>
    );
  }
}

export default MovieItemCard;
