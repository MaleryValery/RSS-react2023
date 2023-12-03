import { Outlet } from 'react-router-dom';
import { NAV_MENU } from '../utils/constants';
import Navbar from './Navbar';
import styles from './RootLayout.module.scss';

function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <Navbar
          navList={NAV_MENU}
          classLogo={styles.logo}
          classNavWrapper={styles.navWrapper}
          classNavList={styles.navList}
          classNavElement={styles.navElement}
        />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
