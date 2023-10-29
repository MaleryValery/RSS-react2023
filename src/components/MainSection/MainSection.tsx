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

  public async componentDidMount(): Promise<void> {
    await this.updateHeroesSection();
  }

  public async updateHeroesSection(value?: string): Promise<void> {
    this.setState(() => ({
      isLoading: true,
      error: '',
    }));
    try {
      const heroesData = value
        ? await ApiService.getMovies(value)
        : await ApiService.getMovies('');

      this.setState({
        heroes: heroesData,
        isLoading: false,
        error: '',
      });
    } catch (e) {
      this.setState({
        heroes: [],
        isLoading: false,
        error: e instanceof Error ? e.message : 'something went wrong',
      });
    }
  }

  render() {
    const { isLoading, error, heroes } = this.state;
    return (
      <div className={classes.mainWrapper}>
        <SearchInput onInputChange={this.updateHeroesSection} />
        {isLoading && <Loader />}
        {error && <div className={classes.errorMessage}>{error}</div>}
        {heroes && heroes.length && !isLoading && !error && (
          <HeroesList heroes={heroes} />
        )}
      </div>
    );
  }
}

export default MainSection;
