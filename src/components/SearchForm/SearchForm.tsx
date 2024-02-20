import { ChangeEvent, KeyboardEvent, useState } from 'react';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import classes from './SearchForm.module.css';
import { useAppSelector } from '../../redux/hook';
import useActions from '../../utils/hooks/dispatchActions';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import { SELECT_OPTIONS } from '../../utils/const/const';

function SearchForm() {
  const search = useAppSelector((state) => state.search.value);
  const limit = useAppSelector((state) => state.limit.limit);
  const { setSearch, setLimit } = useActions();
  const [inputValue, setInputValue] = useState(search);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onSubmit = (): void => {
    setSearch(inputValue);
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

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
        classNameSelect={classes.customSelect}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          setLimit(Number(event.target.value));
        }}
      />
      <CustomButton
        title="search"
        className={classes.customButton}
        disabled={false}
        onClick={onSubmit}
      />
    </form>
  );
}

export default SearchForm;
