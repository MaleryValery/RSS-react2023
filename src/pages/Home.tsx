import FormCard from '../components/FormCard';
import { useAppSelector } from '../redux/hooks';
import { MAIN_HEADING } from '../utils/constants';
import styles from './Home.module.scss';

function Home() {
  const formData = useAppSelector((state) => state.form.formData);

  return (
    <div className={styles.main}>
      <h1>{MAIN_HEADING}</h1>
      {formData.length !== 0 && (
        <div className={styles.homeComtent}>
          {formData.map((data, index) => (
            <div
              key={Math.random()}
              className={
                index === 0 ? 'card-wrapper active-card' : 'card-wrapper'
              }
            >
              <FormCard card={data} />
            </div>
          ))}
        </div>
      )}
      {formData.length === 0 && (
        <>
          <h2>Here will be forms</h2>
          <div className={styles.reactIcon} />
        </>
      )}
    </div>
  );
}

export default Home;
