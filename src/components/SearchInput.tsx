import { Component } from 'react';

class SearchInput extends Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('value');
    if (searchValue) this.setState({ value: searchValue });
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('value', value);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <>
        <input
          type="text"
          className="input input-search"
          onChange={this.handleChange.bind(this)}
        />
        <button type="button" className="btn btn-search">
          search
        </button>
      </>
    );
  }
}

export default SearchInput;
