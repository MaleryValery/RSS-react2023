import { Component } from 'react';
import Header from './pages/Header';
import ListMovies from './interfaces/ListMovies';
import MovieSection from './components/MovieSection';

class App extends Component<object, ListMovies> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: 'searchtext',
      movies: [],
    };
  }

  render() {
    const { movies, text } = this.state;
    return (
      <>
        <Header />

        <MovieSection text={text} movies={movies} />
      </>
    );
  }
}

export default App;
