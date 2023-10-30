import { Component } from 'react';
import MainState from '../../interfaces/MainState';
import ApiService from '../../service/apiService';
import SearchInput from '../Searchinput/SearchInput';
import classes from './MainSection.module.css';
import Loader from '../Loader/Loader';
import HeroesList from '../HerosList/HeroesList';

class MainSection extends Component<object, MainState> {
  constructor(props: object) {
    super(props);
    this.state = {
      heroes: [],
      isLoading: false,
      error: '',
    };

    this.updateHeroesSection = this.updateHeroesSection.bind(this);
  }

  public async updateHeroesSection(value?: string): Promise<void> {
    this.setState(() => ({
      isLoading: true,
    }));
    try {
      const heroesData = value
        ? await ApiService.getMovies(value)
        : await ApiService.getMovies('');

      this.setState({
        heroes: heroesData,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        heroes: [],
        isLoading: false,
        error: (error as Error).message,
      });
    }
  }

  render() {
    const { isLoading, error, heroes } = this.state;
    return (
      <div className={classes.mainWrapper}>
        <SearchInput onInputChange={this.updateHeroesSection} />
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
        {heroes && heroes.length && !isLoading && !error && (
          <HeroesList heroes={heroes} />
        )}
      </div>
    );
  }
}

export default MainSection;
