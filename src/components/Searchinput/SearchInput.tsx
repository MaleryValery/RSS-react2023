import { ChangeEvent, Component, MouseEvent } from 'react';

import classes from './Searchinput.module.css';
import ApiService from '../../service/apiService';
import SearchInputBarState from '../../interfaces/SearchInputBarState';
import SearchInputBarProps from '../../interfaces/SearchInputBarProps';

class SearchInput extends Component<SearchInputBarProps, SearchInputBarState> {
  constructor(props: SearchInputBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public componentDidMount(): void {
    const search = localStorage.getItem('searchValue')
      ? localStorage.getItem('searchValue')
      : '';
    this.setState({
      searchValue: search,
    });
    ApiService.getMovies(search);
  }

  public componentWillUnmount(): void {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue || '');
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  private async onSubmit(event: MouseEvent): Promise<void> {
    event.preventDefault();
    const { onInputChange } = this.props;
    const { searchValue } = this.state;
    await onInputChange(searchValue || '');
  }

  render() {
    return (
      <>
        <input
          type="text"
          className={classes.inputSearch}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.handleChange(event)
          }
        />
        <button
          type="button"
          className={classes.btnSearch}
          onClick={async (event: MouseEvent<HTMLElement>): Promise<void> => {
            this.onSubmit(event);
          }}
        >
          search
        </button>
      </>
    );
  }
}

export default SearchInput;
