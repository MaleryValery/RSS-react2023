import { MouseEvent, useCallback } from 'react';
import img from '../../assets/images/no-img.png';
import styles from './Card.module.scss';
import ICardData from '@/utils/interfaces/ICardData';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import getCorrectPath from '@/utils/functions/getCotterctPath';

function Card({ card }: { card: ICardData }) {
  const router = useRouter();
  const { query, page, limit } = router.query;
  const href = getCorrectPath({ query, page, limit }, true, card.id);

  const image = card.attributes.image ? (
    <img src={card.attributes.image} alt="hero" className={styles.cardImg} />
  ) : (
    <Image
      src={img}
      alt="hero"
      className={styles.cardImg}
      width={200}
      height={200}
      data-testid="card-loc-img"
    />
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (router.pathname.includes('details')) {
        event.preventDefault();
      }
    },
    [router.pathname]
  );

  return (
    <Link href={href} data-testid="card-list-character" onClick={handleClick}>
      <div className={styles.movieCard}>
        {image}
        <div className={styles.cardContent}>
          <span
            data-testid="card-character-name"
            className={styles.cardTitleSmall}
          >
            {card.attributes.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
