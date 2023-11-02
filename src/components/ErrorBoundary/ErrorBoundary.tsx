import { Component } from 'react';
import CustoButton from '../UI/CustomBotton/CustomButton';
import classes from './ErrorBoundary.module.css';
import IErrorBoundaryProps from './IErrorBoundaryProps';
import IErrorBoundaryState from './IErrorBoundaryState';

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
      return (
        <div className={classes.errorBoundaryWrapper}>
          <h1 className={classes.errorHeading}>
            Oppps... Rick messed up, try later{' '}
          </h1>
          <h3 className={classes.errorSubHeading}>WUBBA LUBBA DUB DUB</h3>
          <div className={classes.errorBoundaryImg} />
          <CustoButton
            disabled={false}
            onClick={(): void => window.location.reload()}
            className="bg-fuchsia-500 hover:bg-fuchsia-600 active:bg-fuchsia-700 focus:outline-none px-5 py-2 text-sm leading-5 text-white rounded-full"
          >
            Back to normal
          </CustoButton>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
