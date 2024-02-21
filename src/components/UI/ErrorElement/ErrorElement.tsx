import { useNavigate } from 'react-router-dom';
import classes from './ErrorElement.module.css';
import CustomButton from '../CustomButton/CustomButton';

function ErrorElement() {
  const navigator = useNavigate();
  return (
    <div className={classes.errorBoundaryWrapper}>
      <h1 className={classes.errorHeading}>Wow, something went wrong...</h1>
      <div className={classes.errorBoundaryImg} />
      <CustomButton
        title="restart"
        disabled={false}
        onClick={(): void => navigator('/')}
        className={classes.restartButton}
      />
    </div>
  );
}

export default ErrorElement;
