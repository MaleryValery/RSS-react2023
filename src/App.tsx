import { Component } from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import CustomButton from './components/UI/CustomBotton/CustomButton';
import ErrorState from './interfaces/ErrorState';

class App extends Component<object, ErrorState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isError: false,
    };
    this.handleError = this.handleError.bind(this);
  }

  componentDidUpdate() {
    const { isError } = this.state;
    if (isError) {
      throw new Error('you get error 💥');
    }
  }

  private handleError() {
    this.setState({ isError: true });
  }

  render() {
    return (
      <>
        <CustomButton disabled={false} onClick={this.handleError}>
          get error
        </CustomButton>
        <Header />
        <MainSection />
      </>
    );
  }
}

export default App;
