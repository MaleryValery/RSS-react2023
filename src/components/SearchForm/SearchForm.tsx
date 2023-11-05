import { ChangeEvent, useState, MouseEvent, KeyboardEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomBotton/CustomButton';
import LocalStorageService from '../../utils/LocalStorageService';
import ISearchFormProps from './ISearchFormProps';
import classes from './SearchForm.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import SELECT_OPTIONS from '../../utils/const/const';

function SearchForm(props: ISearchFormProps) {
  const [inputValue, setInputValue] = useState(
    LocalStorageService.getData('searchValue') || ''
  );
  const [search, setSearch] = useSearchParams();

  const { updateCardsSection, page } = props;

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
    search.set('name', inputValue);
    search.set('page', '1');
    setSearch(search);
    setInputValue(inputValue);
    LocalStorageService.setData('searchValue', inputValue || '');
    await updateCardsSection(inputValue);
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
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
        defaultValue={SELECT_OPTIONS[0]}
        classNameSelect={classes.searshSelect}
        classNameOpt={classes.searshOption}
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
