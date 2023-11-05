import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import classes from './Home.module.css';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={classes.homeMainWrapper}>
        <button
          type="button"
          className={classes.homeContentWrapper}
          onClick={() => {
            if (location.pathname.includes('details')) navigate('/');
          }}
        >
          <MainSection />
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
