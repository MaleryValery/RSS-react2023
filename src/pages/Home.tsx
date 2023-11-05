import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import classes from './Home.module.css';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = () => {
    if (location.pathname.includes('details')) navigate('/');
  };

  return (
    <>
      <Header />
      <div className={classes.homeMainWrapper}>
        <div
          tabIndex={0}
          aria-label="overlay"
          onKeyDown={onClose}
          role="button"
          className={classes.homeContentWrapper}
          onClick={onClose}
        >
          <MainSection />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
