import { Component } from 'react';
import Header from './pages/Header';
import MainSection from './components/MainSection/MainSection';
import HeroListProps from './interfaces/HeroListProps';

class App extends Component<object, HeroListProps> {
  render() {
    return (
      <>
        <Header />
        <MainSection />
      </>
    );
  }
}

export default App;
