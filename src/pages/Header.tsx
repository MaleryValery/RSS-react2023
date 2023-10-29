import { Component } from 'react';
import SearchInput from '../components/Searchinput/SearchInput';

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
