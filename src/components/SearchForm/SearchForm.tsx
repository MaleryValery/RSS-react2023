import { ChangeEvent, useState, MouseEvent, KeyboardEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import LocalStorageService from '../../utils/LocalStorageService';
import ISearchFormProps from './ISearchFormProps';
import classes from './SearchForm.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import SELECT_OPTIONS from '../../utils/const/const';

function SearchForm(props: ISearchFormProps) {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState(
    LocalStorageService.getData('searchValue') || ''
  );
  const [search, setSearch] = useSearchParams();
  const { updateCardsSection, page, limit, setLimit } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.trim();
    setInputValue(value);
    LocalStorageService.setData('searchValue', value);
  };

  const onSubmit = async (
    e: MouseEvent | KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    page(1);
    search.set('page', '1');
    setSearch(search);
    setInputValue(inputValue);
    LocalStorageService.setData('searchValue', inputValue || '');
    await updateCardsSection(inputValue, limit, 1);
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const handleSelect = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLimit(+value);
    page(1);
    search.set('page', '1');
    navigation('/');
  };

  return (
    <div className={classes.serchFormWrapper}>
      <CustomInput
        placeholder='search for "Rick and Morty" characters'
        onChange={handleChange}
        value={inputValue}
        onKeyDown={handleInputSubmit}
        className={classes.customInput}
      />
      <CustomSelect
        items={SELECT_OPTIONS}
        value={limit}
        classNameSelect={classes.searshSelect}
        classNameOpt={classes.searshOption}
        onChange={handleSelect}
      />
      <CustomButton
        className={classes.customButton}
        disabled={false}
        onClick={async (event?: MouseEvent<HTMLElement>): Promise<void> => {
          if (event) onSubmit(event);
        }}
      >
        search
      </CustomButton>
    </div>
  );
}

export default SearchForm;
