import classes from './Header.module.scss';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <header className={classes.header} data-testid="header-data">
      <Navbar />
    </header>
  );
}

export default Header;
