import FormCard from '../components/FormCard';
import { useAppSelector } from '../redux/hooks';
import { MAIN_HEADING } from '../utils/constants';
import styles from './Home.module.scss';

function Home() {
  const formData = useAppSelector((state) => state.form.formData);

  return (
    <div>
      <h1>{MAIN_HEADING}</h1>
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
    </div>
  );
}

export default Home;
