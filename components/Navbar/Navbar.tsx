import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import CustomButton from '../UI/CustomButton/CustomButton';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Form', href: '/form' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error('You got an error 💥');
    }
  }, [isError]);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <nav className={styles.nav} data-testid="nav-bar">
      <div className={styles.logo}>
        <span className={styles.logoImg} data-testid="logo-img"></span>
        <span className={styles.logoTextg} data-testid="logo-text">
          pp
        </span>
      </div>
      <ul className={styles.navList} data-testid="nav-list">
        {navigation.map((navItem) => {
          return (
            <Link key={navItem.name} href={navItem.href}>
              <li
                data-testid="nav-item"
                className={
                  pathname === navItem.href
                    ? `${styles.navItem} ${styles.navItemActive}`
                    : styles.navItem
                }
              >
                {navItem.name}
              </li>
            </Link>
          );
        })}
        <CustomButton
          data-testid="error-btn"
          className={styles.headerButton}
          onClick={handleError}
          title="error"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
