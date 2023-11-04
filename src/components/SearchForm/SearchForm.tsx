import { ChangeEvent, useState, MouseEvent, KeyboardEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomBotton/CustomButton';
import LocalStorageService from '../../utils/LocalStorageService';
import ISearchFormProps from './ISearchFormProps';

function SearchForm(props: ISearchFormProps) {
  const [inputValue, setInputValue] = useState(
    LocalStorageService.getData('searchValue') || ''
  );
  const [search, setSearch] = useSearchParams();

  const { updateCardsSection, page } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    LocalStorageService.setData('searchValue', event.target.value);
  };

  const onSubmit = async (
    e: MouseEvent | KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    search.set('searchValue', inputValue);
    search.set('page', '1');
    setSearch(search);
    page(1);
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
    <div className="flex flex-row  gap-2">
      <CustomInput
        placeholder='search for "Rick and Morty" characters'
        onChange={handleChange}
        value={inputValue}
        onKeyDown={handleInputSubmit}
        className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-Lime-500 focus:ring-1 sm:text-sm"
      />
      <CustomButton
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
