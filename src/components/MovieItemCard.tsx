import { Component } from 'react';
import MovieCard from '../interfaces/MovieCard';

class MovieItemCard extends Component<MovieCard> {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={movie.Poster} alt="movie-poster" />
        <div className="movie-content">
          <span className="movie-title">{movie.Title}</span>
          <span className="movie-year">{movie.Year}</span>
          <span className="movie-type">{movie.Type}</span>
        </div>
      </div>
    );
  }
}

export default MovieItemCard;
