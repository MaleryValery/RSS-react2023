import { NavLink } from 'react-router-dom';

type NavElement = { name: string; path: string };

interface NavbarProps {
  navList: NavElement[];
  classLogo?: string;
  classNavWrapper?: string;
  classNavList?: string;
  classNavElement?: string;
}

function Navbar({
  navList,
  classLogo,
  classNavWrapper,
  classNavList,
  classNavElement,
}: NavbarProps) {
  return (
    <nav className={classNavWrapper}>
      <div className={classLogo} />
      <ul className={classNavList}>
        {navList.map((navEl) => {
          return (
            <li key={navEl.name} className={classNavElement}>
              <NavLink to={navEl.path}>{navEl.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
