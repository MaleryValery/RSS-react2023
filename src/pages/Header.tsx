import { Component } from 'react';
import SearchInput from '../components/SearchInput';

class Header extends Component<object> {
  render() {
    return (
      <header>
        <SearchInput />
      </header>
    );
  }
}

export default Header;
