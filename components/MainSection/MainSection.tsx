import SearchForm from '../SearchForm/SearchForm';
import styles from './MainSection.module.scss';
import CardsList from '../CardsList/CardsList';
import IResponseData from '@/pages/api/IResponseData';
import ICardData from '@/utils/interfaces/ICardData';
import ErrorElement from '../UI/ErrorElement/ErrorElement';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface MainSectionProps {
  children?: ReactNode;
  response: IResponseData<ICardData[]>;
}

function MainSection({ response, children }: MainSectionProps) {
  const router = useRouter();

  const onClose = () => {
    if (router.pathname.includes('details')) {
      router.back();
    }
  };

  return (
    <div
      tabIndex={0}
      aria-label="overlay"
      onKeyDown={onClose}
      role="button"
      className={styles.homeContentWrapper}
      onClick={onClose}
      data-testid="overlay"
    >
      <div className={styles.mainSectionWrapper}>
        <div className="main-wrapper" data-testid="nain-wrapper">
          <SearchForm />
          <div className={styles.homeMainWrapper}>
            {!!response ? <CardsList data={response} /> : <ErrorElement />}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
