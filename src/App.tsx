import { Component } from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import ErrorBtn from './components/ErrorBtn/ErrorBtn';

class App extends Component<object> {
  render() {
    return (
      <>
        <ErrorBtn />
        <Header />
        <MainSection />
      </>
    );
  }
}

export default App;
