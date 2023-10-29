import HeroObject from './Hero';

interface MainState {
  isLoading: boolean;
  heroes: HeroObject[] | null;
  error: string;
}

export default MainState;
