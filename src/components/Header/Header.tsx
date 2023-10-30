import { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <h1>Ricky App</h1>
      </header>
    );
  }
}

export default Header;
