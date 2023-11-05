import { useEffect, useState } from 'react';
import classes from './Header.module.css';
import CustomButton from '../UI/CustomBotton/CustomButton';
import IHeader from './IHeader';

function Header(props: IHeader) {
  const [isError, setIsError] = useState(false);
  const { children } = props;

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
      <div className={classes.logo} />
      <h1 className={classes.headerTitle}>React App</h1>
      <CustomButton className={classes.headerButton} onClick={handleError}>
        error
      </CustomButton>
      {children}
    </header>
  );
}

export default Header;
