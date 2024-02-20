import { Link } from 'react-router-dom';
import { ICustomNavProps } from './ICustomNavProps';
import classes from './CustomNav.module.css';

function CustomNav({ navItems, className }: ICustomNavProps) {
  return (
    <nav className={`${className} ${classes.nav}`}>
      <ul className={classes.navList}>
        {navItems.map((item) => (
          <li className={classes.navItem} key={item.navItemId}>
            <Link to={item.navItemTitle}>{item.navItemTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CustomNav;
