import styles from './CardDetails.module.scss';
import img from '../../../assets/images/no-img.png';
import ICardData from '../../../utils/interfaces/ICardData';
import ErrorElement from '../../UI/ErrorElement/ErrorElement';
import { useRouter } from 'next/router';
import getCorrectPath from '@/utils/functions/getCotterctPath';
import Link from 'next/link';

import Image from 'next/image';

function CardDetails({ card }: { card: ICardData }) {
  const router = useRouter();
  const { query, page, limit } = router.query;
  const href = getCorrectPath({ query, page, limit }, false);
  const image = card.attributes.image ? (
    <img src={card.attributes.image} alt="hero" className={styles.cardImg} />
  ) : (
    <Image
      src={img}
      alt="hero"
      className={styles.cardImg}
      width={200}
      height={200}
    />
  );

  return (
    <div className={styles.cardDetailsWrapper}>
      {!!!card && <ErrorElement />}
      {!!card && (
        <div className={styles.cardContentWrapper}>
          <h2 className={styles.cardDetailsTitle} data-testid="details-name">
            {card?.attributes.name || 'unknown'}
          </h2>
          <div className={styles.cardDetailsImgBox}>{image}</div>
          <div className={styles.cardDetailsText}>
            <p>Family: {card.attributes.family_members[0] || 'unknown'}</p>
            <p>Gender: {card.attributes.gender || 'unknown'}</p>
            <p>Jobs: {card.attributes.jobs || 'unknown'}</p>
            <p>nationality: {card.attributes.nationality || 'unknown'}</p>
            <p>died: {card.attributes.died || 'unknown'}</p>
            <Link href={href}>
              <div
                className={styles.cardDetailsCloseBtn}
                data-testid="close-btn"
              >
                close
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
