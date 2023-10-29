import { ChangeEvent, Component, MouseEvent } from 'react';
import {
  SearchInputBarProps,
  SearchInputBarState,
} from '../../interfaces/InputBar';
import classes from './Searchinput.module.css';

class SearchInput extends Component<SearchInputBarProps, SearchInputBarState> {
  constructor(props: SearchInputBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public componentWillUnmount(): void {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  private async onSubmit(event: MouseEvent): Promise<void> {
    event.preventDefault();
    await this.props.onChange(this.state.searchValue);
  }

  render() {
    return (
      <>
        <input
          type="text"
          className={classes.inputSearch}
          onChange={this.handleChange.bind(this)}
        />
        <button
          type="button"
          className={classes.btnSearch}
          onClick={this.onSubmit.bind(this)}
        >
          search
        </button>
      </>
    );
  }
}

export default SearchInput;
