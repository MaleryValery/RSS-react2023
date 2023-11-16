import { ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import LocalStorageService from '../../utils/LocalStorageService';
import ISearchFormProps from './ISearchFormProps';
import classes from './SearchForm.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import { SELECT_OPTIONS } from '../../utils/const/const';
import { RootState } from '../../redux/store';
import { setSearch } from '../../redux/slices/searchSlice';
import { setLimit } from '../../redux/slices';

function SearchForm(props: ISearchFormProps) {
  const search = useSelector((state: RootState) => state.search.value);
  const limit = useSelector((state: RootState) => state.limit.value);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { updateCardsSection, page } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.trim();
    dispatch(setSearch(value));
  };

  const onSubmit = async (
    e: MouseEvent | KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    page(1);
    dispatch(setSearch(search));
    LocalStorageService.setData('searchValue', search);
    updateCardsSection();
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(setLimit(value));
    page(1);
    navigation('/');
    updateCardsSection();
  };

  return (
    <div className={classes.serchFormWrapper}>
      <CustomInput
        placeholder='search for "Rick and Morty" characters'
        onChange={handleChange}
        value={search}
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
        onClick={(event?: MouseEvent<HTMLElement>): void => {
          if (event) onSubmit(event);
        }}
      >
        search
      </CustomButton>
    </div>
  );
}

export default SearchForm;
