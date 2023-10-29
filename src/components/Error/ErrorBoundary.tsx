import { Component, ErrorInfo } from 'react';
import ErrorState from '../../interfaces/ErrorState';
import ErrorProps from '../../interfaces/ErrorProps';

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(): ErrorState {
    return { isError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    throw new Error(`Error caught by ErrorBoundary: ${error}, ${errorInfo}`);
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;
    if (isError) {
      return <h1>Rick messed up, try later</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
