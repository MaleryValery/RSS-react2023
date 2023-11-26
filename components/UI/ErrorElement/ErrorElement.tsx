import styles from './ErrorElement.module.scss';
import CustomButton from '../CustomButton/CustomButton';
import { useRouter } from 'next/router';

function ErrorElement() {
  const router = useRouter();
  return (
    <div className={styles.errorBoundaryWrapper} data-testid="error-wrapper">
      <h1 className={styles.errorHeading} data-testid="error-heading">
        Oppps... Rick messed up, try later
      </h1>
      <h3 className={styles.errorSubHeading} data-testid="error-subheading">
        WUBBA LUBBA DUB DUB
      </h3>
      <div className={styles.errorBoundaryImg} data-testid="error-img" />
      <CustomButton
        title="restart"
        disabled={false}
        onClick={() => router.push('/')}
        className={styles.restartButton}
      />
    </div>
  );
}

export default ErrorElement;
