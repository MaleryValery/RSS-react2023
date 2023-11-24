import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useState,
  SyntheticEvent,
  useEffect,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import classes from './SearchForm.module.css';
import { useAppSelector } from '../../redux/hook';
import useActions from '../../utils/hooks/dispatchActions';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import { SELECT_OPTIONS } from '../../utils/const/const';

function SearchForm() {
  const search = useAppSelector((state) => state.search.value);
  const limit = useAppSelector((state) => state.limit.limitValue);
  const { setSearch, setLimit } = useActions();
  const [inputValue, setInputValue] = useState(search);
  const [, setSearchParams] = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.trim();
    setInputValue(value);
  };

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    setSearch(inputValue);
    setSearchParams((searchParams) => {
      searchParams.set('page', '1');
      return searchParams;
    });
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set('page', '1');
      return searchParams;
    });
  }, [setSearchParams]);

  return (
    <form className={classes.serchFormWrapper} onSubmit={onSubmit}>
      <CustomInput
        placeholder="search for characters"
        onChange={handleChange}
        value={inputValue}
        onKeyDown={handleInputSubmit}
        className={classes.customInput}
      />
      <CustomSelect
        items={SELECT_OPTIONS}
        value={limit}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          setLimit(event.target.value);
          setSearchParams((searchParams) => {
            searchParams.set('page', '1');
            return searchParams;
          });
        }}
      />
      <CustomButton
        title="search"
        className={classes.customButton}
        disabled={false}
        onClick={(event?: MouseEvent<HTMLElement>): void => {
          if (event) onSubmit(event);
        }}
      />
    </form>
  );
}

export default SearchForm;
