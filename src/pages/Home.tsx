import FormCard from '../components/FormCard';
import { useAppSelector } from '../redux/hooks';
import { MAIN_HEADING } from '../utils/constants';
import styles from './Home.module.scss';

function Home() {
  const formData = useAppSelector((state) => state.formData);
  console.log('formData', formData);

  return (
    <div>
      <h1>{MAIN_HEADING}</h1>
      <div className={styles.homeComtent}>
        {formData.map((data) => (
          <FormCard key={Math.random()} card={data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
