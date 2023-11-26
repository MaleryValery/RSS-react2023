import { ChangeEvent, MouseEvent, KeyboardEvent, SyntheticEvent } from 'react';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import { SELECT_OPTIONS } from '../../utils/const/const';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hook';
import useActions from '@/utils/hooks/dispatchActions';
import styles from './SearchForm.module.scss';

function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const { limitValue } = useAppSelector((state) => state.limit);
  const { setLimit, setSearch } = useActions();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value.trim();
    if (searchValue) {
      params.set('query', searchValue);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    setSearch(searchParams.get('query')?.toString() || '');
    params.set('page', '1');
  };

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const limitValue = event.target.value;
    if (limitValue) {
      params.set('limit', limitValue);
    } else {
      params.delete('limit');
    }
    setLimit(+limitValue);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className={styles.serchFormWrapper} onSubmit={onSubmit}>
      <CustomInput
        placeholder="search for characters"
        onChange={handleChange}
        value={searchParams.get('query')?.toString() || ''}
        onKeyDown={handleInputSubmit}
        className={styles.customInput}
      />
      <CustomSelect
        items={SELECT_OPTIONS}
        value={limitValue}
        classNameSelect={styles.customSelect}
        onChange={handleSelectChange}
      />
      <CustomButton
        title="search"
        className={styles.customButton}
        disabled={false}
        onClick={(event?: MouseEvent<HTMLElement>): void => {
          if (event) onSubmit(event);
        }}
      />
    </form>
  );
}

export default SearchForm;
