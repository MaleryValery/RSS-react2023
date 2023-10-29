import { Component } from 'react';
import Card from './MovieItemCard';
import ListMovies from '../interfaces/ListMovies';

class MovieSection extends Component<ListMovies, object> {
  public render() {
    const { movies, text } = this.props;
    return (
      <div className="wrapper-movies">
        {movies.map((movie) => (
          <Card text={text} key={Number(movie.imdbID.slice(2))} movie={movie} />
        ))}
      </div>
    );
  }
}
export default MovieSection;
