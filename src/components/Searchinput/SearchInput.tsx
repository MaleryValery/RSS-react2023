import { ChangeEvent, Component, MouseEvent } from 'react';

import classes from './Searchinput.module.css';
import SearchInputBarState from '../../interfaces/SearchInputBarState';
import SearchInputBarProps from '../../interfaces/SearchInputBarProps';
import CustomButton from '../UI/CustomBotton/CustomButton';

class SearchInput extends Component<SearchInputBarProps, SearchInputBarState> {
  constructor(props: SearchInputBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public async componentDidMount() {
    const { onInputChange } = this.props;
    const search = localStorage.getItem('searchValue');
    if (search) {
      this.setState({
        searchValue: search,
      });
      onInputChange(search);
    } else {
      this.setState({
        searchValue: '',
      });
      onInputChange();
    }
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
    localStorage.setItem('searchValue', searchValue || '');
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className={classes.searchWrapper}>
        <input
          type="text"
          value={searchValue || ''}
          className={classes.inputSearch}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.handleChange(event)
          }
        />
        <CustomButton
          disabled={false}
          onClick={async (event?: MouseEvent<HTMLElement>): Promise<void> => {
            if (event) this.onSubmit(event);
          }}
        >
          Search
        </CustomButton>
      </div>
    );
  }
}

export default SearchInput;
