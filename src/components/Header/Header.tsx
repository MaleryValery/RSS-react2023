import { Component } from 'react';
import classes from './Header.module.css';
import ErrorState from '../../interfaces/ErrorState';
import ErrorProps from '../../interfaces/ErrorProps';

class Header extends Component<ErrorProps, ErrorState> {
  render() {
    return (
      <header className={classes.header}>
        <h1>Ricky App</h1>
        <button type="button">Get Error</button>
      </header>
    );
  }
}

export default Header;
