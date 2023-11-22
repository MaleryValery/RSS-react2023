import { useEffect, useState } from 'react';
import classes from './Header.module.css';
import CustomButton from '../UI/CustomButton/CustomButton';
import IHeader from './IHeader';

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
      <div className={classes.logo} />
      <h1 className={classes.headerTitle}>React App</h1>
      <CustomButton
        className={classes.headerButton}
        onClick={handleError}
        title="error"
      />
      {children}
    </header>
  );
}

export default Header;
