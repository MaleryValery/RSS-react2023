import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function RootLayout() {
  return (
    <div className="root-wrapper">
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
