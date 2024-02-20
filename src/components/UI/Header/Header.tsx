import { useEffect, useState } from 'react';
import classes from './Header.module.css';
import CustomButton from '../CustomButton/CustomButton';
import IHeader from './IHeader';
import CustomNav from '../Nav/CustomNav';
import { AUTH_ITEMS, NAV_ITEMS } from '../../../utils/const/const';

function Header({ children }: IHeader) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error('You got an error 💥');
    }
  }, [isError]);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>wesome Marvel</h1>
      <CustomNav navItems={NAV_ITEMS} />
      <CustomButton
        className={classes.headerErrorButton}
        onClick={handleError}
      />
      <CustomNav className={classes.authNav} navItems={AUTH_ITEMS} />
      {children}
    </header>
  );
}

export default Header;
