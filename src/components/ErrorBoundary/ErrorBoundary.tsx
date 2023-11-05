import { Component } from 'react';
import IErrorBoundaryProps from './IErrorBoundaryProps';
import IErrorBoundaryState from './IErrorBoundaryState';
import ErrorElement from '../UI/ErrorElement/ErrorElement';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { isError: true };
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;
    if (isError) {
      return <ErrorElement />;
    }
    return children;
  }
}

export default ErrorBoundary;
