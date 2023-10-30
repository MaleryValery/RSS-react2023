import { Component } from 'react';
import classes from './ErrorBtn.module.css';
import ErrorProps from '../../interfaces/ErrorProps';
import ErrorState from '../../interfaces/ErrorState';

class ErrorBtn extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
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
      <button
        type="button"
        className={classes.errorBtn}
        onClick={this.handleError}
      >
        get error
      </button>
    );
  }
}
export default ErrorBtn;
