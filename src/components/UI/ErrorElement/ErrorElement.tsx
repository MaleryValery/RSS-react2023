import { useNavigate } from 'react-router-dom';
import classes from './ErrorElement.module.css';
import CustomButton from '../CustomBotton/CustomButton';

function ErrorElement() {
  const navigator = useNavigate();
  return (
    <div className={classes.errorBoundaryWrapper}>
      <h1 className={classes.errorHeading}>
        Oppps... Rick messed up, try later{' '}
      </h1>
      <h3 className={classes.errorSubHeading}>WUBBA LUBBA DUB DUB</h3>
      <div className={classes.errorBoundaryImg} />
      <CustomButton
        disabled={false}
        onClick={(): void => navigator('/')}
        className={classes.restartButton}
      >
        restart
      </CustomButton>
    </div>
  );
}

export default ErrorElement;
