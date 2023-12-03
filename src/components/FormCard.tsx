import { IFormData } from '../utils/interfaces';
import styles from './FormCard.module.scss';

interface IFormCard {
  card: IFormData;
}

function FormCard({ card }: IFormCard) {
  const { name, age, email, password, country, gender, image } = card;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p>age: {age}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
        <p>country: {country}</p>
        <p>gender: {gender}</p>
      </div>
      <div className={styles.CardImage}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default FormCard;
