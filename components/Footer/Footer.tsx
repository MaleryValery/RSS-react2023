import styles from './Footer.module.scss';
import Heading from '../UI/Heading/Heading';

function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer-data">
      <div className={styles.logo} />
      <Heading
        className={styles.footerTitle}
        tag="h4"
        text="React Next.js App"
      />
      <p className={styles.footerText}>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
